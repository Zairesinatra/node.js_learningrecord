//导入 mysql 模块
const mysql = requie('mysql')
//建立与MySQL数据库的链接关系
const db = mysql.createPool({
    host:'127.0.0.1',   //数据库的IP
    user:'root',    //数据库的账号
    password:'admin123',    //登录数据库的密码
    database:'my_db_01'     //制定操作的数据库
})