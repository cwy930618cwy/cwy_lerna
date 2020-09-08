import { tagsState } from "./state";
import { GetterTree } from "vuex";

export default {
  visitedViews: state => {
    return state.visitedViews;
  },
  cachedViews: state => {
    return state.cachedViews;
  }
} as GetterTree<tagsState, any>;
