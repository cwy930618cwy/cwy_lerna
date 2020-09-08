import { tagsState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";

const mutations = {
  ADD_VISITED_VIEW: (state: tagsState, view: any) => {
    if (state.visitedViews.some(v => v.path === view.path)) return;
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || "no-name"
      })
    );
  },
  ADD_CACHED_VIEW: (state: tagsState, view: any) => {
    if (state.cachedViews.includes(view.name)) return;
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name);
    }
  },

  DEL_VISITED_VIEW: (state: tagsState, view: any) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1);
        break;
      }
    }
  },
  DEL_CACHED_VIEW: (state: tagsState, view: any) => {
    const index = state.cachedViews.indexOf(view.name);
    index > -1 && state.cachedViews.splice(index, 1);
  },

  DEL_OTHERS_VISITED_VIEWS: (state: tagsState, view: any) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path;
    });
  },
  DEL_OTHERS_CACHED_VIEWS: (state: tagsState, view: any) => {
    const index = state.cachedViews.indexOf(view.name);
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1);
    } else {
      // if index = -1, there is no cached tags
      state.cachedViews = [];
    }
  },

  DEL_ALL_VISITED_VIEWS: (state: any) => {
    // keep affix tags
    const affixTags = state.visitedViews.filter((tag: any) => tag.meta.affix);
    state.visitedViews = affixTags;
  },
  DEL_ALL_CACHED_VIEWS: (state: any) => {
    state.cachedViews = [];
  },

  UPDATE_VISITED_VIEW: (state: tagsState, view: any) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  }
};

const { commit } = getStoreAccessors<tagsState, State>("tagsView");

export const commitAddVisitedView = commit(mutations.ADD_VISITED_VIEW);
export const commitAddCachedView = commit(mutations.ADD_CACHED_VIEW);
export const commitDelVisitedView = commit(mutations.DEL_VISITED_VIEW);
export const commitDelCachedView = commit(mutations.DEL_CACHED_VIEW);
export const commitDelOthersVisitedViews = commit(
  mutations.DEL_OTHERS_VISITED_VIEWS
);
export const commitDelOthersCachedViews = commit(
  mutations.DEL_OTHERS_CACHED_VIEWS
);
export const commitDelAllVisitedViews = commit(mutations.DEL_ALL_VISITED_VIEWS);
export const commitDelAllCachedViews = commit(mutations.DEL_ALL_CACHED_VIEWS);
export const commitUpdateVisitedView = commit(mutations.UPDATE_VISITED_VIEW);

export default mutations;
