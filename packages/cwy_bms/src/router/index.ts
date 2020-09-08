import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout/index.vue";

import userRouter from "./modules/user";

export const constantRoutes = [
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401.vue"),
    hidden: true
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/user/game"
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  userRouter,
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
}

export default router;
