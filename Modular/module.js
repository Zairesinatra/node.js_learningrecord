const zairesinatra = require('./externaltestfile')
console.log(zairesinatra)
//exports与module.exports默认相同、若不同则仍module.exports为准
console.log(exports === module.exports)
// CommonJS规定
		// ·每个模块内部,module变量代表当前模块
		// ·module变量是一个对象,她的exports属性即(module.exports)是对外接口
		// ·加载某个模块,其实是加载该模块的module.exports属性.require()方法用于加载模块