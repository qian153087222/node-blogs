const { validateUser } = require('../../joi');
const {
    User,
    bcrypt,
    slat
} = require('../../model/user');

module.exports = async (req, res, next) => {
    try {
        await validateUser(req.body);
        const { password } = req.body;
        const { id } = req.query;
        const user = await User.findOne({ _id: id });
        //验证密码是否一致
        const compareSync = bcrypt.compareSync(password, user.password);
        if (compareSync) {
            // return res.redirect('/admin/user-edit?message=' + '该邮箱被占用');
            return next(JSON.stringify({ path: '/admin/user-edit?id=', message: '该邮箱被占用' }));
        } else {
            //对比失败
            const info = {
                path: '/admin/user-edit',
                id,
                message: '用户比对失败'
            }
            next(info);
        }
    } catch (error) {
        //验证不通过
        // error.message
        // 重定向回用户添加页面
        // res.redirect('/admin/user-edit?message=' + error.message);
        return next(JSON.stringify({ path: '/admin/user-edit', message: error.message }));
    }
}