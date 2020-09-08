import 'components/dist/components.css'
import * as components from 'components'
import Vue from 'vue';

Object.keys(components).forEach((k: any) => {
  if (k === 'DialogPlugin') Vue.use((components as any)[k])
  else Vue.component(k, (components as any)[k])
})
