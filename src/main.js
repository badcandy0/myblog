/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-04 16:43:25
 * @FilePath: \myblog\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
