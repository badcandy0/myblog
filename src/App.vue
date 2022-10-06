<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-06 17:06:26
 * @FilePath: \myblog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <el-container>
    <el-aside>
        <Aside></Aside>
      </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-Footer>
        <Footer></Footer>
      </el-Footer>
    </el-container>
    <el-backtop ></el-backtop>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "./components/Header/index.vue";

export default {
  name: "App",
  components: {
    Aside,
    Footer,
    Header
},
};
</script>

<style>
</style>
