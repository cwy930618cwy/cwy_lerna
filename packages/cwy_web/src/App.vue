<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Home from '@/views/Home/index.vue'

@Component({
  components: { Home }
})
export default class App extends Vue {
}

</script>


<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100vh;
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
