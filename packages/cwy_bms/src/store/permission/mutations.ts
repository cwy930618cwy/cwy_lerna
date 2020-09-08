import { permissionState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";
import { constantRoutes } from "@/router";

export const M_SET_IMAGES = "SET_IMAGES";
export const M_SET_ROOT_TRANSITION = "Set Root Transition";

const mutations = {
  SET_ROUTES(state: permissionState, routes: any) {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const { commit } = getStoreAccessors<permissionState, State>("permission");

export const commitSetRootBlur = commit(mutations.SET_ROUTES);

export default mutations;
