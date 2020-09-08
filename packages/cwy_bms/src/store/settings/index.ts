import actions from "./actions";
import mutations from "./mutations";
import { settingsState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new settingsState(),
  actions,
  mutations,
  getters
} as Module<settingsState, any>;
