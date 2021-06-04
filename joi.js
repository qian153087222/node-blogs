const Joi = require('joi');

//验证用户信息 

function validateUser(user) {
    //定义验证新增用户验证规则

    const UserSchame = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规范')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合规范')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('非法角色值')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    });
    return UserSchame.validateAsync(user);
}

module.exports = {
    validateUser
}