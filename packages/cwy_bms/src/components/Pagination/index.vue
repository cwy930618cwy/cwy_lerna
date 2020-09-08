<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { scrollTo } from "@/utils/scroll-to";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Pagination extends Vue {
  @Prop({ default: 0 }) total!: Number;
  @Prop({ default: 1 }) page?: Number;
  @Prop({ default: 20 }) limit?: Number;
  @Prop({ default: () => [10, 20, 30, 50] }) pageSizes?: any[];
  @Prop({ default: "total, sizes, prev, pager, next, jumper" }) layout?: String;
  @Prop({ default: true }) background?: Boolean;
  @Prop({ default: true }) autoScroll?: Boolean;
  @Prop({ default: false }) hidden?: Boolean;

  get currentPage() {
    return this.page;
  }

  set currentPage(val: any) {
    this.$emit("update:page", val);
  }

  get pageSize() {
    return this.limit;
  }

  set pageSize(val: any) {
    this.$emit("update:limit", val);
  }

  handleSizeChange(val: any) {
    this.$emit("pagination", { page: this.currentPage, limit: val });
    if (this.autoScroll) {
      scrollTo(0, 800, () => {});
    }
  }
  handleCurrentChange(val: any) {
    this.$emit("pagination", { page: val, limit: this.pageSize });
    if (this.autoScroll) {
      scrollTo(0, 800, () => {});
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
