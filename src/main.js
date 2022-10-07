/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 20:51:36
 * @FilePath: \myblog\src\main.js
 * @Description: 文件入口
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
// 引入仓库
import store from './store';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
import '@/mock/mockServe';

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  el:'#app',
  // 注册仓库:组件实例身上会多一个属性$store属性
  store,
  
}).$mount('#app')
