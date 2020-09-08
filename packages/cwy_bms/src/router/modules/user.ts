/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout/index.vue";

const tableRouter = {
  path: "/user",
  component: Layout,
  redirect: "/user/game",
  name: "user",
  meta: {
    title: "游戏中台",
    icon: "table"
  },
  children: [
    {
      path: "game",
      component: () => import("@/views/user/game/game.vue"),
      name: "game",
      meta: { title: "游戏管理" }
    }
  ]
};
export default tableRouter;
