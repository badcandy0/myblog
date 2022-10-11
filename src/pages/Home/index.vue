<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:07:05
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 10:57:12
 * @FilePath: \myblog\src\pages\Home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Home">
    <div v-for="item in data">
      <el-card class="card" shadow="hover">
        <div slot="header" class="card_title">
          {{ item.name }}
        </div>
        <div>
          <div class="time">{{ item.created_time | formatDate }}</div>
          <div class="card_content">{{ item.sign }}</div>
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
import axios from "axios";
import { formatDate } from "@/filters";
export default {
  name: "Home",
  components: {
    Footer,
  },
  mounted() {
    axios
      .get(
        "https://mock.presstime.cn/mock/6343882210c8440077352ecd/myblog_api/blog"
      )
      .then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
  },
  methods: {
    /**
     * 获取当前时间
     * 格式YYYY-MM-DD
     */
    // getdate(value) {
    //   var date = value;
    //   var seperator1 = "-";
    //   var year = date.getFullYear();
    //   var month = date.getMonth() + 1;
    //   var strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   var currentdate = year + " 年 " + month + " 月 " + strDate + " 日 ";
    //   return currentdate;
    // },
  },
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      console.log(new Date(time));
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>

<style scoped>
#Home {
  position: absolute;
  width: 100%;
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
  width: 55%;
  margin-bottom:15px;
}
</style>