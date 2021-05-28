// 博客管理页面

//引入express

const express = require('express');

//创建博管理示页面路由

const admin = express();

// 登录页面
admin.get('/login', (req, res) => {
    res.render('admin/login');
});
// user页面
admin.get('/user', (req, res) => {
    res.render('admin/user');
});
//导出博客路由

module.exports = admin;