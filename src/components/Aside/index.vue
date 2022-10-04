<template>
  <div>
    <div><el-avatar :size="100" :src="url"> </el-avatar></div>

    
  </div>
</template>

<script>
import hutao from "@/components/Aside/images/hutao.png";

export default {
  name: "Aside",
  data() {
    return {
      url: hutao,
      
    };
  },
};
</script>

<style scoped>
</style>