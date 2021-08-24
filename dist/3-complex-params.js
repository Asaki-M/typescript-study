"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object不单单是对象类型，可以是一个函数，对象，数组
var o1 = function () { };
var o2 = {};
var o3 = [];
var o4 = new Date();
// 将对象类型赋值一个基础类型的值就会报错
// const o5: object = 123   // Type 'number' is not assignable to type 'object'.
// 这种定义法，只能按照对应的属性定义，并且对象属性不能多也不能少
// 否则就会报错，所以最好使用接口来定义，但可以用在函数的形参上
var o6 = { foo: 123, bar: '213' };
// 数组类型，定义数组中的每一个都是number类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [123, '123', false];
// 元组类型, 不符合类型，多出或少了都会报错
var tuple = ['123', 123];
// 取值，可以使用数组下标或者数组解构赋值
var name = tuple[0];
var age = tuple[1];
var n = tuple[0], a = tuple[1];
//# sourceMappingURL=3-complex-params.js.map