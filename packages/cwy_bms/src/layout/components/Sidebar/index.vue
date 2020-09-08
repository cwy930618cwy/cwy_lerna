<template>
  <div :class="{ 'has-logo': false }">
    <logo v-if="false" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.scss";

import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  components: { SidebarItem, Logo },
  computed: mapState({
    routes: (state: any) => {
      return state.permission.routes;
    }
  })
})
export default class Index extends Vue {
  get sidebar() {
    return this.$store.state.app.sidebar;
  }
  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }
  get showLogo() {
    return this.$store.state.settings.sidebarLogo;
  }
  get variables() {
    return variables;
  }
  get isCollapse() {
    return !this.sidebar.opened;
  }
}
</script>
