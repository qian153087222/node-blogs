//引入个人信息
const { User } = require('../../model/user');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    //接收请求参数
    const { email, password } = req.body;
    //验证数据
    if (!email.trim() || !password.trim()) {
        res.render('admin/error', { msg: '邮箱或者密码错误' });
    }
    const user = await User.findOne({ email });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            //将用户名存储到请求对象中
            req.session.username = user.username;
            req.app.locals.userInfo = user;
            res.redirect('/admin/user')
        } else {
            res.status(400).render('admin/error', { msg: '邮箱或者密码错误' });
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮箱或者密码错误' });
    }
}
