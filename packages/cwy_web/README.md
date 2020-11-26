# app

## 方便的路由定义

```typescript
@Route({ path: '/some/path' }) // 这里的参数与路由定义的参数相同，但是目前不支持路由嵌套。
@Component
class SomePage extends Vue {} // SomePage 会成为/some/path的路由下的component
```

该方法目前只适用于`views`目录下的`.vue`文件

## API、数据(store)、用例(Usecase) 的隔离

- api 都在 [`api`](../api)下
- 数据操作都在[`data`](../data)下
- 用例都在[`core`](../core)下


## Project setup
```
lerna bootstrap
```

### Compiles and hot-reloads for development
```
yarn serve 或者 npm run serve
```
该命令同时会构建api, components, core, data

如果不想构建以上依赖
```
yarn serve:skip-build 或者 npm run serve:skip-build
```

### Compiles and minifies for production
```
yarn build 或者 npm run build
```

### Run your unit tests
```
yarn test:unit 或者 npm run test:unit
```
