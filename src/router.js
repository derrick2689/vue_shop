/*
 * @Author: your name
 * @Date: 2019-12-26 21:15:01
 * @LastEditTime : 2020-02-20 19:24:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-project\src\view\router\router.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Dashboard from './View/Dashboard/Dashboard.vue'
import Login from './View/Login/Login.vue'
import Navtop from './View/Nav/Nav-top.vue'
export default new VueRouter({
  routes:[
    {path: '/dashboard', component:Dashboard},
    {path: '/', redirect: '/login'} ,//重定向到登录组件
    {path: '/login',component: Login},
    {path: '/navtop', component: Navtop}
  ]
})