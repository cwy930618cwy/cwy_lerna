import Vue from "vue";
import App from "./App.vue";
import './plugins'
import router from "./router";
import "@/styles/index.scss"; // global css

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
