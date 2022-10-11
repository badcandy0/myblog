/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-11 16:19:58
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 19:24:32
 * @FilePath: \myblog\src\store\search.js
 * @Description: search组件的状态管理
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */

import { reqGetSearchInfo } from "@/api";
// state:仓库存储数据的地方
const state = {
    // 仓库初始状态
    searchList:[]
};
// mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList;
    }
};
// actions:处理action的地方，可以书写自己的业务逻辑，也可以异步
const actions = {
    // 获取search模块数据
    async getSearchList({ commit }, params = {}) {
        // params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        console.log(result);
        if (result.code==200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
// getters:可以理解为计算属性,用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    searchList(state){
        return state.searchList||[];
    }
};


// 对外暴露Store类的一个实例
export default {
    state,
    mutations,
    actions,
    getters
};