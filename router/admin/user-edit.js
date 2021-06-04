const { validateUser } = require('../../joi');
const {
    User,
    bcrypt,
    slat
} = require('../../model/user');

module.exports = async (req, res, next) => {
    try {
        await validateUser(req.body);
        const { password, email } = req.body;
        req.body.password = bcrypt.hashSync(password, slat());
        if (await User.findOne({ email: email })) {
            // return res.redirect('/admin/user-edit?message=' + '该邮箱被占用');
            return next(JSON.stringify({ path: '/admin/user-edit', message:'该邮箱被占用'}));
        }
        await User.create(req.body);
        res.redirect('/admin/user');
    } catch (error) {
        //验证不通过
        // error.message
        // 重定向回用户添加页面
        // res.redirect('/admin/user-edit?message=' + error.message);
        return next(JSON.stringify({ path: '/admin/user-edit', message:error.message}));
    }
}