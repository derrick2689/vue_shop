<!--
 * @Author: your name
 * @Date: 2019-12-23 22:18:44
 * @LastEditTime : 2019-12-25 21:22:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE项目\my-project\src\components\HelloWorld.vue
 -->
<template>
  <div class="hello">
    <h1>你好，vue</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
