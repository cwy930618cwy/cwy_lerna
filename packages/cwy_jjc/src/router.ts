import Vue from "vue";
import Router from "vue-router";
// import { GetUserInfo } from 'core'

const req = require.context("./views", true, /\.vue$/);
req.keys().forEach(k => req(k));

import Route from './decorators/route'

if (Route.disconnected) {
  console.warn('以下路由因为其祖先路由没有被定义，因此没有加入最终路由表')
  console.warn('没有找到的路由用中括号表示')
  console.warn(Route.disconnected)
}

Vue.use(Router);

const router = new Router({ routes: Route.routes.concat([]) });

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.anonymousAllowed && !to.meta.anonymousOnly) next()
  const account = ''
  if (account !== undefined) {
    if (to.meta && to.meta.anonymousOnly) next({ path: '/', replace: true })
    else next()
  } else {
    if (to.meta && (to.meta.anonymousOnly || to.meta.anonymousAllowed)) next()
    else next({ path: '/login', replace: true })
  }
})

export default router
