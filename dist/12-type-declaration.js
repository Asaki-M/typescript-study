"use strict";
// 类型声明
// 引用第三方npm模块时候，他是js模块
Object.defineProperty(exports, "__esModule", { value: true });
// 引用进来就报错了，找不到类型声明文件
var lodash_1 = require("lodash");
// 声明函数返回类型以及传参类型(没有安装声明模块时候)
// declare function camelCase(input: string):string
// 约束调用函数返回的是string类型，就需要用 declare 声明这个函数传入的值的类型，以及返回的类型
var res = lodash_1.camelCase('hello lodash');
// 但现在大多数模块已经支持ts了,所以根据vscode报错信息给安装 @types/lodash 声明模块
// 有一些模块已经支持了 ts 不需要再安装对应的声明模块
//# sourceMappingURL=12-type-declaration.js.map