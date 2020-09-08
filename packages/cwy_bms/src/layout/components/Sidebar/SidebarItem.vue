<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item.vue";
import AppLink from "./Link.vue";
import FixiOSBug from "./FixiOSBug";

import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: { Item, AppLink }
})
export default class SidebarItem extends Vue {
  // mixins: [FixiOSBug],

  @Prop({ default: {} }) item!: { [key: string]: string };
  @Prop({ default: false }) isNest?: Boolean;
  @Prop({ default: "" }) basePath!: string;

  // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
  // TODO: refactor with render function
  onlyOneChild = null;
  hasOneShowingChild(children = [], parent: any) {
    const showingChildren = children.filter((item: any) => {
      if (item.hidden) {
        return false;
      } else {
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item;

        const onlyOneChild =
          (item as any).meta.icon || (item.meta && item.meta.icon);

        return true;
      }
    });

    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
      return true;
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
      return true;
    }

    return false;
  }
  resolvePath(routePath: any) {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return path.resolve(this.basePath, routePath);
  }
}
</script>
