//导入 mysql 模块
const mysql = require('mysql')
//建立与MySQL数据库的链接关系
const db = mysql.createPool({
    host:'127.0.0.1',   //数据库的IP
    user:'root',    //数据库的账号
    password:'admin123',    //登录数据库的密码
    database:'my_db_01'     //制定操作的数据库
})
//测试mysql模块是否正常工作
// SELECT 1没有实质性作用仅测试
// db.query('SELECT 1',(err,results)=>{
//     // mysql工作期间报错
//     if(err)return console.log(err.message)
//     //能够执行SQL语句
//     console.log(results)
// })
//查询 users 所有的数据
// const sqlStr = 'SELECT * FROM users'
// db.query(sqlStr,(err,results)=>{
//     if(err)return console.log(err.message)
//     console.log(results)
// })
// 如果执行SELECT这个查询语句,结果是数组

// 插入数据
// 插入到users表中的数据对象
// const users = {username:'Spider-man',password:'123456'}
// const sqlStr = 'INSERT INTO users (username,password) VALUES(?,?)'
// // 使用数组的形式依次为 ? 占位符指定具体的值
// db.query(sqlStr,[users.username,users.password],(err,results)=>{
//     if(err) return console.log(err.message)
//     // 可以通过 affectedRows判断插入语句成功
//     if(results.affectedRows === 1){console.log('插入数据成功')}
// })
//  如果执行INSERT INTO这个查询语句,结果是{}

// id具有唯一性-曾经用过被删除的id也不会被占用

// 插入数据的便捷方式(不必100个???)
// const users = {username:'TheFlash',password:'flash666'}
// const sqlStr = 'INSERT INTO users SET ?'
// db.query(sqlStr,users,(err,results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){console.log('插入数据成功')}
// })

// 更新数据
// 要更新的数据对象
// const user = { username:'zairesinatra',password:'zairesinatra',id:16}
// const sqlStr = 'update users set username=?,password=? where id=?'
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('更新数据成功')
//     }
// })
// 注意这里的JSON对象用:不用=
// 注意这里不能修改没有出现的数据库数据
// 执行的结果也是对象,可以通过affectedRows判断更新成功

// 演示更新数据的便捷方式
// const user = {id:3,username:'kakaxi',password:'abcdef'}
// 定义SQL语句
// const sqlStr = 'update users set ? where id=?'
// // 执行SQL语句
// db.query(sqlStr,[user,user.id],(err,results)=>{
//         if(err) return console.log(err.message)
//         if(results.affectedRows === 1){
//             console.log('更新数据成功')
//         }
//     })

// 删除数据
// 删除根据id为唯一标识
// const sqlStr = 'DELETE FROM users WHERE id = ?'
// // 如果SQL语句有多个占位符则必须使用数组为每个占位符指定具体的值
// // 如果SQL语句只有一个占位符,可以省略数组
// db.query(sqlStr,2,(err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('删除数据成功');
//     }
// })

// 标记删除-模拟删除的动作
// 所谓标记删除即设置类似于status状态字段,来标记当前这条数据是否被删除
// 当用户执行了删除的动作,并不执行DELETE语句把数据删除,而是执行了UPDATE语句,将数据对应的status字段标记为删除即可
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,5],(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('删除数据成功');
}})