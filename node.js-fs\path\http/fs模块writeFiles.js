//writeFile()
const fs = require('fs')
fs.writeFile('./files/2.txt','Hello node.js!',function(err){
	console.log(err)
	// 如果文件写入成功，则err的值等于null
	// 如果文件写入失败，则err的值为错误对象
	if(err){
		return console.log('文件写入失败' + err.message)
	  }
	  console.log('文件写入成功')
})