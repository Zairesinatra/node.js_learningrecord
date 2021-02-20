const express = require('express')
const app = express()
//配置表单解析数据中间件
app.use(express.urlencoded({extended:false}))
//导入路由模块
const router = require('./apirouter')
//注册全局中间件-视作router全局中间件
app.use('/api',router)

app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})