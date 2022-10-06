/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-06 17:55:49
 * @FilePath: \myblog\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
  router,
  el:'#app',
  
}).$mount('#app')
