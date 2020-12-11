import * as components from '../components/main'
import Vue from 'vue';

Object.keys(components).forEach((k: any) => {
  Vue.component(k, (components as any)[k])
})
