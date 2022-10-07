<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:07:08
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 17:27:55
 * @FilePath: \myblog\src\pages\Label\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <h1>标签</h1>
    <el-tag
      v-for="item in items"
      :key="item.label"
      effect="plain"
      @click.native="Tagclick()"
      class="tags"
    >
      {{ item.label }} {{ item.nums}}
    </el-tag>
    <tr></tr>
  </div>
</template>

<script>
export default {
  name: "Label",
  methods: {
    Tagclick(){
      window.location.href ="https://github.com/badcandy0"
    }
  },
  data() {
    return {
      items: [
        {  label: "标签一",nums: "3"},
        {  label: "标签二",nums: "4"},
        {  label: "标签三",nums: "6"},
        {  label: "标签四",nums: "1"},
        {  label: "标签五",nums: "2"},
      ],
    };
  },
};
</script>

<style scoped>
  .tags {
    margin-right: 15px;
  }
</style>