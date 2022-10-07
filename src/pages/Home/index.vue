<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:07:05
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 17:02:06
 * @FilePath: \myblog\src\pages\Home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Home">
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ cardName }}
        </div>
        <div>
          <time class="time">{{ getdate() }}</time>
          <div class="card_content">{{ content }}</div>
        </div>
      </el-card>
    </div>
    <div class="copyright">
      <el-divider></el-divider>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Footer,
  },
  methods: {
    /**
     * 获取当前时间
     * 格式YYYY-MM-DD
     */
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + " 年 " + month + " 月 " + strDate + " 日 ";
      return currentdate;
    },
  },
  data() {
    return {
      cardName: "富文本生成文档结构树方法",
      content:
        "参考很多博客项目，发现大部分都具备文章标题预览功能，便琢磨实现一下。",
    };
  },
};
</script>

<style scoped>
#Home {
  position: absolute;
  width: 75%;
}
.card_title {
  font-size: 20px;
}
.card_content {
  font-size: 16px;
}
.time {
  font-size: 13px;
  color: #999;
}
.copyright {
  position: relative;
  margin-bottom: 75px;
}
.card {
  position: relative;
  width: 45%;
}
</style>