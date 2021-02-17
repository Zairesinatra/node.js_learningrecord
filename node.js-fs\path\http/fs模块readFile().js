// readFile()
// 1.导入fs模块操作文件
const fs = require('fs')
// 2.调用readFile()读取文件
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    console.log(err)
    // 如果读取成功则err的结果为null
    console.log(dataStr);
    // zairesinatra
    // 如果失败则dataStr的结果为undefine
    if(err){
        return console.log("读取文件失败!"+err.message)
    }
    return console.log("读取文件成功!"+dataStr)
})

