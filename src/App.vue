<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 10:38:55
 * @FilePath: \myblog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <el-container class="container">
    <el-aside class="aside">
        <Aside></Aside>
      </el-aside>
    <el-container class="container_1">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-Footer>
        <!-- <Footer></Footer> -->
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

  .container{
    position: absolute;
    width: 90%;
  }
  .container_1{
    position: relative;
    margin-left:280px;
  }
  .aside{
    position: fixed;
  }
</style>
