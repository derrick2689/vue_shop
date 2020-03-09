<!--
 * @Author: your name
 * @Date: 2020-01-09 21:03:22
 * @LastEditTime : 2020-02-20 19:29:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-project\src\View\Login\Login.vue
 -->
<template>
  <div class="login-con">
    <div class="login-form">
      
      <form action="" >
        <h1>探索未知世界之门</h1>
        <span>用户：</span><input type="text" value="user" class="login-u" /><br>
        <span>密码：</span><input type="text" value="passwd"  class="login-u" /><br>
        <button type="text" @click="myButt()"  class="login-p">点击登录</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
      
  }
}
</script>
<style scoped>
.login-con {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 625px;
  background-color:rgb(135, 175, 214);
}
.login-form {
  position: fixed;
  text-align: center;
  background:rgb(187, 198, 209);
  height: 260px;
  width: 400px;
  /* border: 1px solid; */
  margin-top: 10%;
  margin-left: 35%;

}
.login-u {
  margin-top: 20px;
}
.login-p {
  margin-top: 30px;
}
</style>