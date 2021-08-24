"use strict";
var a = '123';
var b = false; // true
var c = 100; // NaN , Infinty
// 在非严格模式下，前面的声明都可以声明成null
var d = null;
var f = undefined;
// void 通常定义函数返回值，在严格模式下不能设为null
var e = undefined;
// 配置文件中只用了es5标准库，symbol是es2015的标准库，因此需要内部再引用es2015的标准库
// 在配置文件中的lib中设置，注意：设置了es2015就覆盖掉默认的了，如果需要使用到默认的，需要在lib中再添加上
var h = Symbol();
var any = '123';
any = 123;
any.bar();
// 隐式类型推断
var j = 123;
// j就会被推断为number类型，再给j赋值其他类型，语法上就会报错
// j = '123'
var k;
// 而声明了变量，没有赋值 k 就会被推断为 any类型
k = 123;
k = '123';
k = false;
//# sourceMappingURL=2-basic-params.js.map