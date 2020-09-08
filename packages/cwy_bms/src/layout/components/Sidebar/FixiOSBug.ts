import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class FixiOSBug<T> extends Vue {
  get device() {
    return this.$store.state.app.device;
  }

  mounted() {
    // In order to fix the click on menu on the ios device will trigger the mouseleave bug
    // https://github.com/PanJiaChen/vue-element-admin/issues/1135
    this.fixBugIniOS();
  }

  fixBugIniOS() {
    const $subMenu = this.$refs.subMenu as any;
    if ($subMenu) {
      const handleMouseleave = $subMenu.handleMouseleave;
      $subMenu.handleMouseleave = (e: any) => {
        if (this.device === "mobile") {
          return;
        }
        handleMouseleave(e);
      };
    }
  }
}
