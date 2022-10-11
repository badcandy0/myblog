/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 15:58:39
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 10:56:34
 * @FilePath: \myblog\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, /*关闭语法检查*/
  // 配置代理跨域问题
  // devServer:{
  //   proxy:{
  //     "/api":{
  //       target:"http://localhost:8080",
  //     }
  //   }
  // }
})
