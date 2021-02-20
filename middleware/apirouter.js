//创建api路由模块
const express = require('express')
const router = express.Router()
//在这里挂载对应的路由
router.get('/get',(req,res)=>{
    const query = req.query
    //调用res.send()向客户端响应处理结果
    res.send({
        //status:0表示处理成功;1表示处理失败
        status:0,
        //msg状态的描述
        msg:'get请求成功',
        //需要响应给客户端的数组
        data:query
    })
})

router.post('/post',(req,res)=>{
    //通过req.body获取请求体中包含 url-encoded 格式数据
    const body = req.body
    //调用res.send()方法向客户端响应结果
    res.send({
        status:0,
        msg:'POST请求成功',
        data:body
    })
})
module.exports = router