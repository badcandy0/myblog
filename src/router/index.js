/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 16:03:19
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-11 16:03:02
 * @FilePath: \myblog\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue';
import Vuerouter from 'vue-router';

Vue.use(Vuerouter)

import Home from '@/pages/Home';
import About from '@/pages/About';
import Label from '@/pages/Label';
import Classify from '@/pages/Classify';
import Archive from '@/pages/Archive';
import Search from '@/pages/Search';



export default new Vuerouter({
    routes:[
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/label',
            component: Label
        },
        {
            path: '/classify',
            component: Classify
        },
        {
            path: '/archive',
            component: Archive
        },
        {
            path:'/search/:keyword?',
            component:Search,
            props:true,
            name:"search"
        },
        {
            path: '*',
            redirect:'/home'
        }
    ]
});