import actions from "./actions";
import mutations from "./mutations";
import { permissionState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new permissionState(),
  actions,
  mutations,
  getters
} as Module<permissionState, any>;
