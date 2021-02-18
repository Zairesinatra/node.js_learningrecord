//这是路由模块
//1.导入express
const express = require('express')
//2.创建路有由对象
const router = express.Router()
//3.挂载具体路由
router.get('/zs/list',(req,res)=>{
    res.send('get zs list')
})
router.post('/zs/plan',(req,res)=>{
    res.send('post zs plan')
})
//4.向外导出路由对象
module.exports = router
