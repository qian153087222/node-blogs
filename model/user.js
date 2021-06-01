//引入mongoose
const mongoose = require('mongoose');

//初始化用户规则

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //保证邮箱地址在插入数据库时不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 普通用户
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用状态
    // 1 禁用状态
    state: {
        type: Number,
        default: 0
    }
});

//使用用户规则 创建集合
mongoose.set('useCreateIndex', true);
const User = mongoose.model('User', UserSchema);

// User.create({
//     username:'itheima',
//     email:'itheima@itcast.cn',
//     password:'123456',
//     role:'admin',
//     state:0
// }).then(()=>console.log('创建成功'))

module.exports = {
    User
};