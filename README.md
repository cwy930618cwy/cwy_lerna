# cwy_bms

web 前端工程

## 关于工程

用 lerna 构建的 monorepo 工程

1. 安装[yarn](https://yarnpkg.com/en/docs/install)
2. 安装 lerna

```
npm install -g lerna
```

3. 安装所有依赖

```
lerna bootstrap
```

此命令会安装组件外部依赖以及内部依赖

### 每个 package 的具体文档详见其自身目录下的 README

## git 提交要求：

### 前缀

提交消息内容中英文均可，但是需要附加前缀

```
test: 更新测试文件
dist: 更新版本，package.json等
minor: 小改动
doc: 更新文档
fix: bug修复
bin: 更新构建文件（build之后的文件）
refactor: 重构已有代码
nit: 针对代码风格，语法等的小改动，多发生在code review之后的修改
feat: 新功能
```

> 例

```
fix: 关闭 #9, 修复路径问题

nit: 将let替换成const

doc: 在README.md中新增“用法”
```

### 内容

消息内容第一行简明但完整地描述所进行的改动（fix **不**只是将 bug 编号写上就可以，别人
（甚至是自己）在看 commit 的时候还得去翻 task 列表，很麻烦）。
若有必要，从第三行开始补充详细描述

> 例

```
fix: 修复T123，iOS软键盘覆盖输入框的问题

用中文输入法输入一些拼音，在未选择中文之前收起软键盘
再次点击输入框，此时输入框会被软键盘遮挡
在iOS 11.2上需要特殊判断进行操作
```

## 注意事项

- 用 VSCode 直接在工程根目录打开会在`@Comopnent, @Prop`等代码处报错，是因为根目录没有`tsconfig.json`导致，可以在需要`@Component`的“装饰器(decorators)“的子项目路径下打开 VSCode 解决（毕竟每个项目相对独立，单独打开本应该不成问题）
