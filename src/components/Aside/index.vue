<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 16:15:06
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 09:30:12
 * @FilePath: \myblog\src\components\Aside\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Aside">
    <div class="avatar">
      <el-avatar :size="100" :src="url"> </el-avatar>

      <el-link
        class="avatar-name"
        :underline="false"
        href="https://github.com/badcandy0"
        >Badcandy</el-link
      >
    </div>
    <div class="menu">
      <el-menu :default-active="this.$route.path" :router="true">
        <el-menu-item index="/home" >
          <template>
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/classify" >
          <template>
            <i class="el-icon-menu"></i>
            <span>分类</span>
          </template></el-menu-item
        >
        <el-menu-item index="/label" >
          <template>
            <i class="el-icon-collection-tag"></i>
            <span>标签</span>
          </template></el-menu-item
        >
        <el-menu-item index="/archive" >
          <template>
            <i class="el-icon-date"></i>
            <span>归档</span>
          </template></el-menu-item
        >
        <el-menu-item index="/about" >
          <template>
            <i class="el-icon-info"></i>
            <span>关于</span>
          </template></el-menu-item
        >
      </el-menu>
    </div>
    <el-footer>
      <div class="footer">
        <el-row :gutter="12" class="footer_icon">
          <el-col :span="4">
            <el-link :underline="false" href="https://github.com/badcandy0">
              <img
                src="./images/github.svg"
                alt="github"
                width="18"
                height="18"
              />
            </el-link>
          </el-col>
          <el-col :span="4">
            <el-link :underline="false" href="https://weibo.com/u/6112760203">
              <img
                src="./images/weibo.svg"
                alt="weibo"
                width="18"
                height="18"
              />
            </el-link>
          </el-col>
          <el-col :span="4">
            <el-link :underline="false" href="https://twitter.com/badcandy_0">
              <img
                src="./images/twitter.svg"
                alt="twitter"
                width="18"
                height="18"
              />
            </el-link>
          </el-col>
        </el-row>
      </div>
    </el-footer>
  </div>
</template>

<script>
import hutao from "@/components/Aside/images/hutao.png";

export default {
  name: "Aside",
  data() {
    return {
      url: hutao,
    };
  },
};
</script>

<style scoped>
#Aside {
  position: relative;
  width: 225px;
}

.avatar {
  position: relative;
  justify-content: center;
  margin: 50px 50px 15px 50px;
}

.avatar-name {
  position: relative;
  justify-content: center;
  margin: 15px 0 0 15px;
  font-size: 16px;
  font-family: "San Francisco SC";
  font-weight: bold;
}

.menu {
  position: relative;
  margin: 50px 0 75px 0;
}

.footer {
  position: relative;
  justify-content: center;
}

.el-col {
  margin: 15px 15px 15px 15px;
}
</style>