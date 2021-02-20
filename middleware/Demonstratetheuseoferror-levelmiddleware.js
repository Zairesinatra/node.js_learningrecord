//!!错误级别中间件必须注册在所有路由之后

//导入express模块
const express = require('express')
//创建express服务器实例
const app = express()

app.get('/error',(req,res)=>{
    //1.1人为制造错误
    throw new Error('服务器内发生错误')
    //此时postman中报错-大堆报错
    //res.send('')没有执行
    res.send('Error occur')
})
    //2.定义错误级别中间件,捕获整个项目的错误一场,从而防止程序的崩溃
    app.use((err,req,res,next)=>{
        console.log('发生了错误!'+err.message)
        //终端:Error服务器内发生错误
        //服务器并没有崩溃
        res.send('Error'+err.message)
    })
app.listen(80,()=>{
    console.log('Express server runing at http://127.0.0.1')
})