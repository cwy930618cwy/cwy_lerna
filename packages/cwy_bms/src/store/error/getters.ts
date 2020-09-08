import { errorState } from "./state";
import { GetterTree } from "vuex";

export default {
  logs: state => {
    return state.logs;
  }
} as GetterTree<errorState, any>;
