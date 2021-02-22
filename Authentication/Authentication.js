const express = require('express')
const app = express()
var session = require('express-session')
app.use(session({
    secret:'zairesinatra',
    resave:false,
    saveUninitialized:true,
}))
// 配置express-session成功后才有req.session这个属性
// 将登陆成功后的用户信息保存到session
app.post('api/login',(req,res)=>{
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({status:1,msg:'登录失败'})
    }
    req.session.user = req.body //用户信息
    req.session.islogin = true //登陆状态

    res.send({status:0,msg:'登陆成功'})
})

//从session上取数据
app.get('/api/username',(req,res)=>{
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    res.send({status:0,msg:'success',username:req.session.user.username})
})

// 清空session - req.session.destroy()函数清空服务器保留的session信息-用户退出登录时
app.post('/api/logout',(req,res)=>{
    // 清空session信息-不会清空其他用户的session
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登录成功'
    })
})


app.listen(80,()=>{
    console.log('Express server is running at http://127.0.0.1')
})