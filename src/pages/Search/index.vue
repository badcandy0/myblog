<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-11 14:59:37
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 19:56:23
 * @FilePath: \myblog\src\pages\Search\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Search">
    <div class="card" v-for="index in searchList" :key="index.id">
      <el-card shadow="hover">
        <div slot="header">{{ index.name }}</div>
        <div>
          <i class="el-icon-collection-tag">{{ index.tags }}</i>
          <div>{{ index.sign }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Search",
  props: ["keyword"],
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["searchList"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("getSearchList", {});
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
</style>