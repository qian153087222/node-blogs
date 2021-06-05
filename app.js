require('./model/connect');
require('./model/user');
//引入express插件
const express = require('express');
//引入express-session
const session = require('express-session');
//引入页面路由
const { home, admin } = require('./router');
// 引入body-parse模块 用来处理posy请求参数
// const bodyParser = require('body-parser');
//创建网站服务器
const app = express();
//引入path
const path = require('path');
//处理post请求参数
app.use(express.urlencoded({ extended: false }));
//配置session
app.use(session({
    secret: 'itheima',
    resave: true,  // 新增
    saveUninitialized: true,  // 新增
}));
//告诉express框架模板的位置
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板的默认后缀
app.set('view engine', 'art');
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
//开放静态资源
app.use(express.static(path.join(__dirname, 'public')));
//登录拦截
app.use('/admin', require('./middleware/loginGuard'));

//使用路由

app.use('/home', home);
app.use('/admin', admin);

//定义错误处理中间件

app.use((err,req,res,next)=>{
    const result = JSON.parse(err);
    for (const key in result) {
        if (Object.hasOwnProperty.call(result, key)) {
            
        }
    }
    res.redirect(`${result.path}?message=${result.message}`);
});

//监听端口

app.listen(80);


console.log('网站服务器启动成功，请访问localhost');