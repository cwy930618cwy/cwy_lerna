import Vuelidate from 'vuelidate';
import Vue from 'vue';

Vue.use(Vuelidate)
declare module 'vue/types/vue' {
  interface Vue {
    $v: any
  }
}