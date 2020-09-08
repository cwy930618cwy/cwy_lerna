import { ActionTree } from "vuex";
import { permissionState } from "./state";
export const generateRoutes = "generateRoutes";
import { asyncRoutes } from "@/router";

export default {
  [generateRoutes]({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        console.log("filterAsyncRoutes");
        // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
} as ActionTree<permissionState, any>;
