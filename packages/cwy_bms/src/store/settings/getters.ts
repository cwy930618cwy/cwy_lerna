import { settingsState } from "./state";
import { GetterTree } from "vuex";

export default {
  theme: state => {
    return state.theme;
  },
  showSettings: state => {
    return state.showSettings;
  },
  tagsView: state => {
    return state.tagsView;
  },
  fixedHeader: state => {
    return state.fixedHeader;
  },
  sidebarLogo: state => {
    return state.sidebarLogo;
  }
} as GetterTree<settingsState, any>;
