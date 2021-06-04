module.exports = (req,res,next)=>{
    //判断用户是否访问的登录页面登录
    //判断用户是否是登录状态
    //如果用户是登录的 将请求重定向到登陆页面
    if(req.url !== '/login' && !req.session.username) return  res.redirect('/admin/login');
    next();
};