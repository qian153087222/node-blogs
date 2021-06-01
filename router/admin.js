// 博客管理页面
//引入express
const express = require('express');
//创建博管理示页面路由
const admin = express();
//引入个人信息
const { User } = require('../model/user');
// 登录页面
admin.get('/login', (req, res) => {
    res.render('admin/login');
});

// 登录请求
admin.post('/login', async(req, res) => {
    //接收请求参数
    const { email, password } = req.body;
    //验证数据
    if (!email.trim() || !password.trim()) {
        res.render('admin/error', { msg: '邮箱或者密码错误' });
    }
    const user = await User.findOne({email});
    if (user) {
        user.password === password ? res.end('登录成功') : res.status(400).render('admin/error', { msg: '邮箱或者密码错误' });
    } else {
        res.status(400).render('admin/error', { msg: '邮箱或者密码错误' });
    }
});

// user页面
admin.get('/user', (req, res) => {
    res.render('admin/user');
});

//导出博客路由
module.exports = admin;