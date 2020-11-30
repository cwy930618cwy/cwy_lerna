<template>
  <div class="home">
    <cwy-header/>
    <Content/>
    <cwy-footer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Content from '@/views/Content/index.vue'
@Component({
  components: { Content }
})
export default class Home extends Vue {
}

</script>

<style lang="scss">
.home{
  overflow: hidden;
  color: white;
  position: relative;
}
</style>
