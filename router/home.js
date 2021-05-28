// 首页

//引入express

const express = require('express');

//创建博客展示页面路由

const home = express();

home.get('/',(req,res)=>{
    res.send('home');
});

//导出博客路由

module.exports = home;