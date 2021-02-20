const express = require('express')
const app = express()
//定义一个最简单的中间件函数
// const mw = function(req,res,next){
//     console.log('简单的中间件函数');
//     //流转关系转交给下一个中间件或路由
//     next()
// }
// //将mw注册全局生效的中间件
// app.use(mw)
//定义第一个全局中间件
app.use((req,res,next)=>{console.log('这是最简单中间件函数,第一个全局中间件');
//此处为中间件作用-获取请求到达服务器的时间-不需要每个中间件都添加方法
const time=Date.now();req.startTime=time;
next()})
app.use((req,res,next)=>{console.log('第二个全局中间件');
next()})

//局部中间件
const mw1 = (req,res,next)=>{
    console.log('Locally effective middleware')
    next()
}

//多个局部中间件
const mw2 = (req,res,next)=>{console.log('multiple locally effective middleware');next()}
app.get('/zzyy',mw1, mw2,(req, res)=>{res.send('multiple locally effective middleware')})
//router部分
app.get('/',(req,res)=>{
    console.log('调用了这个/路由');
    res.send('zairesinatra'+req.startTime)
})
app.get('/zs',(req,res)=>{
    console.log('调用了这个/zs路由');
    res.send('zs'+req.startTime)
})
app.get('/zy',mw1,(req,res)=>{
    res.send('back locally effective middleware')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})