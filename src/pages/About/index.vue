<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:06:44
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 10:17:33
 * @FilePath: \myblog\src\pages\About\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="About">
    <div >
      <div v-html="data.content">
      </div>
    </div>
    <div class="copyright">
      <el-divider></el-divider>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from'@/components/Footer';
export default {
  name: "About",
  mounted() {
    axios.get("https://mock.presstime.cn/mock/6343882210c8440077352ecd/myblog_api/about").then((response) => {
      this.data = response.data;
      console.log(this.data);
    });
  },
  data() {
    return {
      data: {},
    };
  },
  components: {
   Footer 
  }
};
</script>

<style>
</style>