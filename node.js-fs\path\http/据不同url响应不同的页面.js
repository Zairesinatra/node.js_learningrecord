//核心实现步骤
//1.获取url地址
//2.设置默认响应内容为404 Not found
//3.判断用户请求是否为 / 或者 /index.html首页
//4.判断用户请求是否为 /about.html 页面
//5.设置Content-Type响应头,防止中文乱码-res.setHeader('Content-Type','text/html; charset=utf-8')
//6.使用res.end(把内容响应给客户端)
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    let content  = '404 Not found!'
    // '/'默认斜线
    if(req.url === '/' || req.url === '/index.html'){
        content = '<h1>index页</h1>'
    }else if(req.url === '/about.html'){
        content = '<h1>about页</h1>'
    }
    res.setHeader('Content-type','text/html; charset=utf-8')
    res.end(content)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})