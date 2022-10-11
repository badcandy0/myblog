/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-07 19:29:00
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 19:18:25
 * @FilePath: \myblog\src\api\index.js
 * @Description: 对所有的api接口统一管理
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
// 对所有的api接口统一管理
import request from './request';

// 当前这个函数需不需要一个外部传递参数
// 给服务器传递参数params至少是一个空对象
export const reqGetSearchInfo = (params) => request({ url: "https://mock.presstime.cn/mock/6343882210c8440077352ecd/myblog_api/blog", method: "get", data: params });
// 获取标签
export const reqGetLabelInfo = (params) => request({ url: "https://mock.presstime.cn/mock/6343882210c8440077352ecd/myblog_api/label",method: "get", data: params });