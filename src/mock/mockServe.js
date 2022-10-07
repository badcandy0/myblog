/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-07 20:43:36
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 20:50:08
 * @FilePath: \myblog\src\mock\mockServe.js
 * @Description: 引入mockjs模块
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
// 引入mockjs模块
import Mock from 'mockjs';
// 引入JSON数据格式
// webpack默认对外暴露的：图片，JSON数据格式
import banner from './banner.json';

// mock数据:第一个参数是请求地址，第二个参数是请求数据
Mock.mock("/mock/banner",{code:200,data:banner});

