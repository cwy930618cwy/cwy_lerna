import { settingsState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";
import { constantRoutes } from "@/router";

export const M_SET_IMAGES = "SET_IMAGES";
export const M_SET_ROOT_TRANSITION = "Set Root Transition";

const mutations = {
  CHANGE_SETTING: (state: settingsState, { key, value }: any) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      (state as any)[key] = value;
    }
  }
};

const { commit } = getStoreAccessors<settingsState, State>("permission");

export const commitChangeSetting = commit(mutations.CHANGE_SETTING);

export default mutations;
