/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-07 20:00:14
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 20:08:27
 * @FilePath: \myblog\src\store\index.js
 * @Description: 配置store仓库
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from "vue";
import Vuex from "vuex";
// 使用插件一次
Vue.use(vuex);

// state:仓库存储数据的地方
const state = {};
// mutations:修改state的唯一手段
const mutations = {};
// actions:处理action的地方，可以书写自己的业务逻辑，也可以异步
const actions = {};
// getters:可以理解为计算属性,用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};


// 对外暴露Store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});