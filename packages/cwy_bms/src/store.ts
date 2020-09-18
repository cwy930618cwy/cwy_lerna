import Vue from "vue";
import Vuex from "vuex";
import {
  Authentication,
  Meta,
  setStore
} from 'data'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Authentication,
    Meta
  },
  strict: true
});

setStore(store)

export default store