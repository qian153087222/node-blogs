//引入mongoose
const mongoose = require('mongoose');

//链接数据库

mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('链接数据库成功'))
    .catch(err=>console.log(err,'链接数据库失败'));