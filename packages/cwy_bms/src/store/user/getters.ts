import { userState } from "@/store/user/state";
import { GetterTree } from "vuex";

export default {
  token: state => {
    return state.token;
  },
  name: state => {
    return state.name;
  },
  avatar: state => {
    return state.avatar;
  },
  introduction: state => {
    return state.introduction;
  },
  roles: state => {
    return state.roles;
  }
} as GetterTree<userState, any>;
