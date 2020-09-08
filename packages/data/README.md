
# 数据操作

用Vuex做的数据和状态的存储，采用`vuex-module-decorators`简化代码编写，并且支持类型推断


```typescript

const SomeModule = {
  state: {
    foo: '',
    bar: 123
  },
  mutations: {
    SET_FOO (state, foo) { state.foo = foo }
    SET_BAR (state, bar) { state.bar = bar }
  },
  actions: {
    asyncSetFoo (context) {
      fetchFoo().then((foo) => {
        context.commit('SET_FOO', foo)
      })
    }
  }
}

new Store({
  mutations: { SomeModule }
})


this.$store.commit('SET_BAR', 321)
this.$store.dispatch('asyncSetFoo')
this.$store.state.SomeModule.bar
```

可以简化为

```typescript
@Module
class A extends VuexModule {
  foo = ''
  bar = 123
  @Mutation SET_FOO(foo) { this.foo = foo }
  @Mutation SET_BAR(bar) { this.bar = bar }
  @Action({ commit: 'SET_FOO' }) asyncSetFoo () {
    return fetchFoo()
  } // 会用返回值的resolve后的值掉用SET_FOO
}

const SomeModule = attachStaticAccessor(A)

new Store({
  mutations: { SomeModule }
})

SomeModule.SET_BAR(321)
SomeModule.asyncSetFoo()
SomeModule.bar
```

