// 博客管理页面
//引入express
const express = require('express');
//创建博管理示页面路由
const admin = express();

// 登录页面
admin.get('/login', require('./admin/loginPage'));

// 登录请求
admin.post('/login', require('./admin/login'));

//登出

admin.get('/logout',require('./admin/logout'));

// user页面
admin.get('/user', require('./admin/userPage'));

// 新增用户页面
admin.get('/user-edit', require('./admin/user-edit-page'));

// 新增用户
admin.post('/user-edit',require('./admin/user-edit'));

// 修改用户
admin.post('/user-modify',require('./admin/user-modify'));

//导出博客路由
module.exports = admin;