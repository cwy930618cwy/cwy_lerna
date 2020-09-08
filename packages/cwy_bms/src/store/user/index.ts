import actions from "./actions";
import mutations from "./mutations";
import { userState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new userState(),
  actions,
  mutations,
  getters
} as Module<userState, any>;
