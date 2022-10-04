<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-04 16:26:30
 * @FilePath: \myblog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <Aside />
    <Footer />
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Aside,
    Footer,
  },
};
</script>

<style>
</style>
