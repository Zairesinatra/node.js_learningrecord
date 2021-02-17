const path = require('path')
const pathStr = path.join('/a','/b/c','../','./d','e')// ../抵消路径
console.log(pathStr)// /a/b/d/e