/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-07 19:08:37
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-07 19:52:55
 * @FilePath: \myblog\src\api\request.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
// 对axios二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import 'nprogress/nprogress.css';
// 创建一个axios实例
// request就是axios
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求时，路径当中会出现api
    baseURL:"/api",
    // 请求超时时间
    timeout: 5000,
});

// 请求拦截器：再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config:配置对象，有请求头（header）属性
    // 进度条开始
    nprogress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    // 进度条结束
    nprogress.done();
     return res.data;
},(error)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'));
})

// 对外暴露
export default requests;