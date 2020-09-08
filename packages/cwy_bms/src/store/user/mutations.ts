import { userState } from "./state";
import { getStoreAccessors } from "vuex-typescript";
import { State } from "@/store";

const mutations = {
  SET_TOKEN: (state: userState, token: String) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state: userState, introduction: String) => {
    state.introduction = introduction;
  },
  SET_NAME: (state: userState, name: String) => {
    state.name = name;
  },
  SET_AVATAR: (state: userState, avatar: String) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state: userState, roles: any[]) => {
    state.roles = roles;
  }
};

const { commit } = getStoreAccessors<userState, State>("user");

export const commitSetToken = commit(mutations.SET_TOKEN);
export const commitSetIntroduction = commit(mutations.SET_INTRODUCTION);
export const commitSetAvatar = commit(mutations.SET_AVATAR);
export const commitSetRoles = commit(mutations.SET_ROLES);

export default mutations;
