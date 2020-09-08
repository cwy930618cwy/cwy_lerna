import actions from "./actions";
import mutations from "./mutations";
import { appState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new appState(),
  actions,
  mutations,
  getters
} as Module<appState, any>;
