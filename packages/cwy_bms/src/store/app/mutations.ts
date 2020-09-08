import { appState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";
import Cookies from "js-cookie";

const mutations = {
  TOGGLE_SIDEBAR: (state: appState) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set("sidebarStatus", 1);
    } else {
      Cookies.set("sidebarStatus", 0);
    }
  },
  CLOSE_SIDEBAR: (state: appState, withoutAnimation: any) => {
    Cookies.set("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state: appState, device: String) => {
    state.device = device;
  }
};

const { commit } = getStoreAccessors<appState, State>("app");

export const commitToggleSidebar = commit(mutations.TOGGLE_SIDEBAR);
export const commitCloseSidebar = commit(mutations.CLOSE_SIDEBAR);
export const commitToggleDevice = commit(mutations.TOGGLE_DEVICE);

export default mutations;
