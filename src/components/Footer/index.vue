<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-04 16:14:48
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-06 16:38:03
 * @FilePath: \myblog\src\components\Footer\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
<div id="copyright">
    <el-divider></el-divider>
    <div class="coptrigth_text">
        <span>©2022~{{getdate()}} <el-link href="https://github.com/badcandy0">Badcandy</el-link> 拥有所有权利 </span>
    </div>
</div>
</template>

<script>


 
export default {
    name:'Footer',
    methods:{
        getdate(){
            var date = new Date();
            var year = date.getFullYear();

            return year
        }
    }
}
</script>

<style scoped>

#copyright{
    position: absolute;
    width: 65%;

}

.coptrigth_text{
    position: relative;
    justify-content: center;
}

.el-link {
    font-size:16px;
}
</style>