const express = require('express')
const app = express()


//导入自己封装的中间件
const customBodyParser = require('./custom-body-parser')
//自定义中间件函数注册为全局可用的中间件
app.use(customBodyParser)

app.post('/zs',(req,res)=>{
    res.send(req.body)
})
app.listen(80,function(){
    console.log('Express server runing at http://127.0.0.1')
})