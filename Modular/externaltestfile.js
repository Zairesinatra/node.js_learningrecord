//挂载常量
const age = 23;
//这里不向外暴露则是私有变量
const noexports = 'cantsee'


//向外暴露-module.exports方法
module.exports.username = 'Male god';
module.exports.sayHello = function Hi(){
    console.log('Hello!');
}

//向外暴露常量,如果不写则age为模块内部的私有成员,外界访问不到的
module.exports.age = age


//共享成员注意点-永远以module.exports指向对象为准
// module.exports = {
//     nickname:'ziyi',
//     sayHi(){
//         console.log('HaHaHa')
//     }
// }


//exports对象-Node提供简化module.exports的对象
//若指向对应则暴露的结果会将两者相加
exports.field = 'ECE'
exports.salary = 'one billion'

//使用误区-谨记module.exports赋值指向