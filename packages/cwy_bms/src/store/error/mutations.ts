import { errorState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";

const mutations = {
  ADD_ERROR_LOG: (state: errorState, log: any[]) => {
    state.logs.push(log);
  },
  CLEAR_ERROR_LOG: (state: errorState) => {
    state.logs.splice(0);
  }
};

const { commit } = getStoreAccessors<errorState, State>("error");

export const commitAddErrorLog = commit(mutations.ADD_ERROR_LOG);
export const commitClearErrorLog = commit(mutations.CLEAR_ERROR_LOG);

export default mutations;
