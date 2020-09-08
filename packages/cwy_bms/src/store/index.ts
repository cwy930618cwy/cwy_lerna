import Vue from "vue";
import Vuex from "vuex";
import app from "@/store/app";
import error from "@/store/error";
import permission from "@/store/permission";
import settings from "@/store/settings";
import tagsView from "@/store/tagsView";
import user from "@/store/user";
import { appState } from "@/store/app/state";
import { errorState } from "@/store/error/state";
import { permissionState } from "@/store/permission/state";
import { settingsState } from "@/store/settings/state";
import { tagsState } from "@/store/tagsView/state";
import { userState } from "@/store/user/state";

Vue.use(Vuex);

export type State = {
  app: appState;
  error: errorState;
  permission: permissionState;
  settings: settingsState;
  tagsView: tagsState;
  user: userState;
};

export default new Vuex.Store<State>({
  modules: {
    app,
    error,
    permission,
    settings,
    tagsView,
    user
  }
});
