<!--
 * @Author: your name
 * @Date: 2020-01-09 21:06:40
 * @LastEditTime : 2020-01-09 22:20:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-project\src\View\Nav\Nav-top.vue
 -->
<template>
  <div class="nav-con">
    <a>我的课程 </a>
    <a>学习笔记 </a>
    <a>个人中心 </a>
    <a href="../Login/Login.vue" class="login-ll">登录</a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.nav-con {
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: darkslateblue;
  text-align: center;
  font-size: 20px;
}
/* .login-ll {
  margin-left: 400px;
} */
</style>