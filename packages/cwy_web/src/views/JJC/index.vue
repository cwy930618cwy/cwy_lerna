<template>
  <div class="content">
    jjc
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Route from '@/decorators/route'

@Route({
  path: '/jjc',
})

@Component({
  components: {  }
})
export default class JJC extends Vue {
  
}

</script>


<style lang="scss">
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

</style>
