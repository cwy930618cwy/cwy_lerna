import { ActionTree } from "vuex";
import { settingsState } from "./state";
export const generateRoutes = "generateRoutes";

export default {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  }
} as ActionTree<settingsState, any>;
