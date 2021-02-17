//文件的实际存放路径,作为每个资源的请求url地址
//服务器充当的角色为字符串的搬运工
//请求-读文件-响应

//1.导入需要的模块
const fs = require('fs')
const http = require('http')
const path = require('path')
//2.创建基本服务器
const server = http.createServer()
server.on('request',(req,res)=>{
    //3.请求的url地址映射为文件的存放路径(未优化-需客户手动加clock)
    // const fpath = path.join(__dirname,req.url)

    //5.优化3代码
    // 注意此处不能用const,const使用必须要初始化
    let fpath = ''
    if(req.url === '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'/clock',req.url)
    }
    //4.根据映射的文件路径读取文件的内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        //失败错误消息响应
        if(err) return res.end('404 Not found')
        //成功返回客户端响应
        res.end(dataStr)
    })
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})
