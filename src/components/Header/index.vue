<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-06 12:54:53
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 15:44:19
 * @FilePath: \myblog\src\components\Header\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16"
        ><el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="1">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="2">分类</el-breadcrumb-item>
          <!-- <el-breadcrumb-item to="3">标签</el-breadcrumb-item>
          <el-breadcrumb-item to="4">归档</el-breadcrumb-item>
          <el-breadcrumb-item to="5">关于</el-breadcrumb-item> -->
         
        </el-breadcrumb></el-col
      >
      <el-col :span="8"
        ><el-input placeholder="请输入内容" v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i> </el-input
      ></el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
</style>