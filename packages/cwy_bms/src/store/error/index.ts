import actions from "./actions";
import mutations from "./mutations";
import { errorState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new errorState(),
  actions,
  mutations,
  getters
} as Module<errorState, any>;
