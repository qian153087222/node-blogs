const { User } = require('../../model/user');
module.exports = async (req, res) => {
    // 接收客户端传递过来的当前页单参数
    /**
     * page 当前页 
     * limit 每页显示个数
     */
    const { page = 1, limit = 10 } = req.query;
    //查询用户总数
    const count = await User.countDocuments({});
    //总页数
    const total = Math.ceil(count / limit);

    //页码对应的数据查询开始位置

    const start = (page - 1) * limit;
    //将用户信息从数据库总查询出来
    const user = await User.find({}).limit(limit).skip(start);
    res.render('admin/user', { user,page,total });
}