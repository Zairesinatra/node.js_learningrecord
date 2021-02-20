const express = require('express')
const app = express()
//通过express.json()这个中间件解析表单中 JSON 格式的数据
//此时应注意放置的位置
app.use(express.json())
app.use(express.urlencoded())
app.post('/zspost',(req,res)=>{
    //在服务器可以使用 req.body 属性可以接受客户端发送过来的请求体数据
    //默认情况如果不配置解析表单数据的中间件默认undefined
    console.log(req.body)
    res.send('ok')
})
app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('okbook')
})
app.listen(80,()=>{
    console.log('Express server running at http://127.0.0.1')
})