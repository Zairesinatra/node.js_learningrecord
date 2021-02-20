const express = require('express')
const app = express()
//配置表单解析数据中间件
app.use(express.urlencoded({extended:false}))


// 配置JSONP的接口必须在CORS之前,否则会被视为CORS接口
app.get('/api/jsonp',(req,res)=>{
    // 定义JSONP接口具体实现过程
    // 1.得到函数名称
    const funcName = req.query.callback
    // 2.定义发送客户端的数据对象
    const data = {name:'zairesinatraJASONP',age:'23JSONP'}
    // 3.拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4.把拼接的字符串响应给客户端
    res.send(scriptStr)
})


//路由前配置 cors 中间件,解决接口跨域的问题
const cors = require('cors')
app.use(cors())

//导入路由模块
const router = require('./apirouter')
//注册全局中间件-视作router全局中间件
app.use('/api',router)

app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1');
})