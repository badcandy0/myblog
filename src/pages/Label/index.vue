<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:07:08
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 19:40:08
 * @FilePath: \myblog\src\pages\Label\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <h1>标签</h1>
    <el-button
      v-for="item in labelList"
      effect="plain"
      @click.native="Tagclick()"
      class="tags"
      round
      size="small"
      type="primary"
      plain
    >
      {{ item.tag }} {{ item.count }}
    </el-button>
    <div class="copyright">
      <el-divider></el-divider>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";
import {mapGetters} from 'vuex';
export default {
  name: "Label",
  mounted(){
        this.$store.dispatch('getLabelList',{})
    },
    computed: {
      ...mapGetters(['labelList'])
    },
  // mounted() {
  //   axios
  //     .get(
  //       "https://mock.presstime.cn/mock/6343882210c8440077352ecd/myblog_api/label"
  //     )
  //     .then((res) => {
  //       this.data = res.data.data;
  //       console.log(this.data);
  //     });
  // },
  methods: {
    Tagclick() {
      window.location.href = "https://github.com/badcandy0";
    },
  },
  data() {
    return {
      data: {},
    };
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
.tags {
  margin-bottom: 10px;
}
</style>