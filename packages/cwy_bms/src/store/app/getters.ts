import { appState } from "@/store/app/state";
import { GetterTree } from "vuex";

export default {
  sidebar: state => {
    return state.sidebar;
  },
  device: state => {
    return state.device;
  }
} as GetterTree<appState, any>;
