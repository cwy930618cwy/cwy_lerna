<template>
  <div class="game">
    游戏管理
    <button @click="changeGoldDialog = !changeGoldDialog">anniu</button>
    <Dialog
      v-if="changeGoldDialog"
      title="This is a basic dialog"
      :buttons="['OK']"
    >
      Hello
    </Dialog>
    <Button theme="light-blue">下一步</Button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Dialog } from "components";

@Component({
  components: { Dialog }
})
export default class game extends Vue {
  changeGoldDialog = false;
  created() {
    console.log("created--");
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/functions.scss";
@import "@/styles/mixins.scss";

.game {
  background: white;
  padding: dim(30) dim(20);
  position: relative;
  margin: dim(20);
}
</style>
