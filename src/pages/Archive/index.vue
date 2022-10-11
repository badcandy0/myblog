<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 17:06:50
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 10:28:49
 * @FilePath: \myblog\src\pages\Archive\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Archive">
    <div class="timeline">
      <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
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
    name:"Archive",
    components:{
      Footer
    }
}
</script>

<style scoped>
#Archive{
  position: absolute;
  width: 100%;
}
.copyright {
  position: relative;
  margin-bottom: 75px;
}
</style>