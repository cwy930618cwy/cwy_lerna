# 用例

```
输入 --> 用例逻辑 --> 输出（可选)
```

这里我们将用例的输入与用例的逻辑放在一起做成一个class，然后所有的用例都会有一个execute方法来执行具体的逻辑，并且返回可能的输出

## 例：登录用例

### 定义：
- 输入：手机号，密码
- 逻辑：调用登录api，存储token和账号信息
- 输出：一个promise，当且紧当登录成功后该promise才会resolve

### 代码:
```typescript
// Authentication是data中定义的数据操作
class LoginUsecase Implements Usecase<Promise<void>> {
  phone = ''
  password = ''
  async execute () {
    const { token, account } = await new LoginAPI(this.phone, this.password).response
    Authentication.saveToken(token)
    Authentication.saveAccount(account)
  }
}
```

### 使用:
```typescript
async function login () {
  const usecase = new LoginUsecase()
  login.phone = '+8618201229929'
  login.password = '18201229929'
  try {
    await login.execute()
    // 这里就成功登陆了，并且store里存下了token，account
  } catch (e) {
    // 出现错误
  }
}
```

然而，实际应用过程中，一个用例的输入（比如LoginUsecase的phone和password）通常都是某个具体的Component通过`<input>`获取的用户输入。也就是说具体的Component身上也会有phone和password一类的数据。

```vue
<template>
  <div>
    <input v-model="phone">
    <input v-model="password">
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
@Component
export default class Login extends Vue {
  phone = ''
  password = ''
  async login () {
    const usecase = new LoginUsecase()
    login.phone = this.phone // 数据传递繁琐
    login.password = this.password
    try {
      await login.execute()
    } catch (e) {
    }
  }
}
</script>
```

如果能够实现自动的将Component的数据和用例所需的数据进行关联的话，代码量就会大大减少。工程中提供了一些轮子来实现这个想法

```typescript
// template 不变
const LoginMixin = UsecaseMixin(LoginUsecase)

@Component
export default class Login extends mixins(LoginMixin) {
  // phone, password 会自动加到Component上，初始值是LoginUsecase中设定的初始值
  async login () {
    try {
      // 无需传递数据，无需new一个LoginUsecase
      await this.execute(LoginUsecase)
    } catch (e) {
    }
  }
}
```

## 数据验证

数据的验证规则（必填、长度、字符集等）应该是与用例逻辑紧密关联的，所以应当从UI中脱离出来。

在vue层面上，我们使用vuelidate做数据验证，使得验证规则与UI模板解耦。

为了使vuelidate的使用更便捷，工程中提供了一些decorator来方便声明一个用例对自身输入的验证规则，并且简化vuelidate相关的配置


```diff
class LoginUsecase Implements Usecase<Promise<void>> {
+  @required('请输入手机号') phone = ''
-  phone = ''
+  @required('请输入密码') password = ''
-  password = ''
  async execute () {
    const { token, account } = await new LoginAPI(this.phone, this.password).response
    Authentication.saveToken(token)
    Authentication.saveAccount(account)
  }
}
```

通过上述方法将`LoginUsecase`应用到某个Component之后，该component会自动有对应的`validations`供`vuelidate`插件使用

```
validations: {
  phone: {
    required: [Function required]
  },
  password: {
    required: [Function required]
  }
}
```

并且
- `validations.phone.required.message === '请输入手机号'`
- `validations.password.required.message === '请输入密码'`


可以自定义更多的验证规则，工程提供了`validate`工厂方法

```typescript

function validate (
  name: string, // 验证器的名字，最终会出现在$v中，自定 
  validator: (data: any) => boolean, // 验证器逻辑，给一个数据需要返回该数据是否通过验证
  message?: string // 可选的信息
): PropertyDecorator

class SomeUsecase exetnds Usecase<void> {
  @validate(
    'length', 
    (str: string) => str.length > 6 && str.length < 20, 
    '长度6 - 20'
  ) foo = ''
}

// 或者

const length = validate(
  'length', 
  (str: string) => str.length > 6 && str.length < 20, 
  '长度6 - 20'
)

class SomeUsecase exetnds Usecase<void> {
  @length foo = ''
}

// 或者

const length = (m: number, n: numebr) => validate(
  'length', 
  (str: string) => str.length > m && str.length < n, 
  `长度${m} - ${n}`
)

class SomeUsecase exetnds Usecase<void> {
  @length(6, 20) foo = ''
}

```

`vuelidate/lib/validators`中提供了较多的基本验证器，排列组合基本可以满足大多数需求

```typescript
import { maxLength, minLength, and } from 'vuelidate/lib/validators'

const length = (m: number, n: numebr) => validate(
  'length', 
  and(minLength(m), maxLength(n)), 
  `长度${m} - ${n}`
)


class SomeUsecase exetnds Usecase<void> {
  @length(6, 20) foo = ''
}


```