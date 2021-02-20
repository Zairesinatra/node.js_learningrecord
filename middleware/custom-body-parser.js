const qs = require('querystring')
const bodyParser = (req,res,next)=>{
    //监听req的data事件
    //如果数据量较大,无法一次发送完毕,客户端把数据切割,分批发送服务器.所以data事件可能触发多次,每一次触发data事件时候,获取的数据只是完整数据的一部分,需手动拼接接受的数据
    
    //1.定义一个字符串str处理客户端发送过来的请求体数据
    let str = ''
    //2.监听req的data事件
    req.on('data',(chunk)=>{
        str += chunk
    })
    
    //3.监听req的end事件
    req.on('end',()=>{
        //在str里存放的是完整的请求体
        console.log(str)
        //TODO 把字符串格式的请求体数据及陕西澄对象格式
    
        // JSON.parse(). JSON 通常用于与服务端交换数据。 在接收服务器数据时一般是字符串。 我们可以使用JSON.parse() 方法将数据转换为JavaScript 对象。
        //调用qs.parse()方法,将查询字符串解析为对象
        const body = qs.parse(str)
        //将解析出来的请求体对象挂载为req.body属性
        req.body = qs.parse(str)
        console.log(body)
        //调用next()函数,执行后续的业务逻辑
        next()
    })
}
module.exports = bodyParser