# API

所有的API都应该继承[`APIRequest<T>`](./src/api-request.ts)，
`T`为返回的类型


```typescript
abstract class APIRequest<T> {
  response: Promise<T>
  meta: Promise<any>

  // protected 由具体API的子类提供

  // api路径
  // 比如是 /apis/account/token/ 则写成 account/token即可
  // 前面的apis会自动补上，前后的/也会补上
  // 补斜杠时会进行检查，如果path中已经提供斜杠，则不会重复添加
  // 所以 /acounts/token/, /accounts/token/, accounts/token/ 等都是可以的
  protected abstract path: string
  // GET, POST, PUT, DELETE
  protected abstract method: HTTPMethod
  // api参数
  protected params?: any
  // Content-Type， 默认application/json
  protected contentType: string
  // 是否匿名，默认false，某些api（如国际区号）不需要token，
  // 但是带着错误的（过期的）token去访问的话反而会失败
  // 这类api为了防止出错，指定anonymous = true即可
  protected anonymous: boolean
  // 从api返回的数据到T的转换
  protected parse (data: any): T
  // 自定义错误处理，比如找回密码时common_NOT_EXIST代表着手机号码没有被注册
  protected handleError (reason: string, data: any): { reason: string, data: any }
}
```

例子

```typescript
type Account = { username: string, phone: string }
class LoginAPI extends APIRequest<Account> {
  path = 'accounts/token'
  method = HTTPMethod.POST
  constructor(phone: string, password: string) {
    super()
    this.params = { phone, password }
  }
  parse ({ token, account: { username, phone } }: any) {
    // 这里的parse可以把api返回的数据中无用的部分剔除掉
    // 本例子中字段名字没有变化，但是可以变化的
    return { token, account: { username, phone } }
  }
}


const api = new LoginAPI('+8618201229929', 'password')
// 这时网络请求并不会真正的开始
// 只有当api.response或者api.meta被访问时才会发起请求

const response = api.response // 网络请求发起了，response是个Promise
const meta = api.meta // 不会重复发送请求，一个new出来的api不管response和meta被访问多少次，只会发一次请求
const another = api.response // 依然不会发请求，仍然是跟reponse一样的promise

const api2 = new LoginAPI('+8618201229929', 'password')

api2.meta // 重新发请求了



// 具体使用的时候可以
const { token, account } = await api.response
```