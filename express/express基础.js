const express = require('express')
const app = express()

//4.监听客户端的get与post请求,并响应内容
//调用express提供的res.send()方法,向客户端响应一个 JSON对象
app.get('/geturl',(req,res)=>{
    // 调用express提供的res.send()方法
    res.send({name:'zaire',age:23})
})
//调用express提供的res.send()方法,向客户端响应一个 文本字符串
app.post('/posturl',(req,res)=>{
    // 调用express提供的res.send()方法
    // 此处不需要console.log,因为res.send()可以响应json对象也可以响应普通的文本
    res.send('请求成功')
})

//通过 req.query 可以获得客户端发来的 查询参数
//默认情况下, req.query 是一个空对象
app.get('/',(req,res)=>{
    console.log(req.query)
    res.send(req.query)
})


//注意这里的:id是一个动态参数
app.get('/zs/:id/:idd',(req,res)=>{
    // req.params默认为空对象
    console.log(req.params)
    // req.params是动态匹配到的参数
    res.send(req.params)
})
app.listen(80,()=>{console.log('express server running at http://127.0.0.1')})