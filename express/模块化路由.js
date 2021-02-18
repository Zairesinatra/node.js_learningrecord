const express = require('express')
const app = express()
//导入路由模块
const zsRouter = require('./router')
//注册路由模块
//app.use()函数作用-注册全局中间件
app.use('/hahaha',zsRouter)
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})