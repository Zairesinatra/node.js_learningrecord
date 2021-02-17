//创建web服务器四大步骤
const http = require('http')    //引入
const server = http.createServer()  //通过提供的方法，创建实例
//服务器实例的.on()方法,为服务器绑定一个request事件
//1.req请求对象,包含了与客户端相关的数据和属性(不能写request)
server.on('request',(req,res)=>{
    //只要有客户端来请求我们的服务器,就会触发request事件,从而调用这个为服务器绑定的request事件处理函数
    console.log('someone visit our server');
    //如果想在事件处理函数中访问与客户端相关的 数据 和 属性 ，可以通过以下的方式
    const str = `your request url is ${req.url}, and request method is ${req.method}`
    //解决中文乱码问题-req不会
    const strr = `您请求的 url 地址是${req.url}, 请求的 method 类型是 ${req.method}`
    console.log(str)
    console.log(strr)
    //解决中文乱码问题-res会-故调用res.serHeader()方法,设置Content-Type解决中文乱码(以什么样的形式解析)
    res.setHeader('Content-Type','text/html; charset=utf-8')
    //2.res返回对象:在request时间处理函数中中,如果想返回客户端相关的 数据 或 属性 ,可以通过res.end()-发送指定内容并结束请求过程
    res.end(strr)
})
//调用服务器的 server.listen(端口号,cb回调)方法,即可启动服务器
//服务器启动成功就会调用这个回调函数
server.listen(80,()=>{
    console.log('http server running at http://127.0.0.1')
  })
  //ctrl+c停止服务器