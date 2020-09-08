import { ActionTree } from "vuex";
import { errorState } from "./state";
export const generateRoutes = "generateRoutes";

export default {
  addErrorLog({ commit }, log) {
    commit("ADD_ERROR_LOG", log);
  },
  clearErrorLog({ commit }) {
    commit("CLEAR_ERROR_LOG");
  }
} as ActionTree<errorState, any>;
