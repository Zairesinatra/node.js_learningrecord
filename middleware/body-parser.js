//导入express模块
const express = require('express')
//创建express服务器实例
const app = express()
//导入接续表单数据的中间件 body-parser
const parser = require('body-parser')
//与app.use(express.urlencoded({extended:false}))很像
app.use(parser.urlencoded({extended:false}))

//如果没有配置任何表单数据的中间件,默认req.body等于undefined
app.post('/zs',(req,res)=>{
    console.log(req.body)
    res.send('okk')
})
app.listen(80,()=>{
    console.log('Express server runing at http://127.0.0.1')
})