<template>
  <div id="app" class="app">
    <Header class="header"></Header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@/components/Header/index.vue'

@Component({
  components: { Header }
})
export default class App extends Vue {
  get phone () {
    return ''
  }
}

</script>


<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100vh;
  min-width: 1186px;
}

* {
  box-sizing: border-box;
}
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #F7F7FA;
  overflow: scroll;
}
</style>
