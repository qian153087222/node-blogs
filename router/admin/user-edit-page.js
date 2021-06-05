const { User } = require('../../model/user');
module.exports = async(req, res) => {
    const { message, id } = req.query;
    // 修改
    if (id) {
        const user = await User.findOne({_id:id});

        res.render('admin/user-edit', { message,user,link:'/admin/user-modify',button:'修改' });
    } else {
        //新增
        res.render('admin/user-edit', { message,link:'/admin/user-edit',button:'添加' });
    }
}