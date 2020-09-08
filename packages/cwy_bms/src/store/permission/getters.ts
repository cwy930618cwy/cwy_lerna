import { permissionState } from "@/store/permission/state";
import { GetterTree } from "vuex";

export default {
  routes: state => {
    return state.routes;
  },
  addRoutes: state => {
    return state.addRoutes;
  }
} as GetterTree<permissionState, any>;
