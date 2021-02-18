//使用use()函数以及static()对外提供静态资源
const express = require('express')
const app = express()

//这里调用 use() 函数以及 express.static() 方法对外快速提供静态资源
app.use(express.static('./clock'))
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
// 若托管多个静态资源目录则多次调用express.static()函数
	// app.use(express.static('fileA'))
	// app.use(express.static('fileB'))
	// 访问静态资源文件时,express.static()函数会根据目录添加顺序查找所需文件(比如存在相同名称的文件)