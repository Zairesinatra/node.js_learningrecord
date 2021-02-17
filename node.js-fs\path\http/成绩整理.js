// 整理files文件中成绩文档
// 导入fs文件系统模块
const fs = require('fs')
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        // 判断文件是否读取失败
        return console.log("获取文件失败" + err.message)
    }
    // 数组按空格分隔-不写''分割成一个数组->故因写为' '！！！！
    const arrOld = dataStr.split(' ')
    console.log(arrOld)
    console.log(arrOld.length)
    // 循环分隔数组对每一项进行字符串的替换操作
    const arrNew = []
    // 当只有一个参数时，圆括号是可选的：
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    console.log(arrNew)
    // 把数组每一项换行拼接-数组的join方法
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    // 调用fs.writeFile()方法,把处理的成绩内容写入新文件中
    fs.writeFile('./files/成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('文件写入失败'+err.message);
        }
        console.log('成绩写入成功!')
    })
})
// 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
  