import actions from "./actions";
import mutations from "./mutations";
import { tagsState } from "./state";
import getters from "./getters";
import { Module } from "vuex";
export default {
  namespaced: true,
  state: new tagsState(),
  actions,
  mutations,
  getters
} as Module<tagsState, any>;
