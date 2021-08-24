"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型
// 使用泛型可以提供一个函数的重用性，在声明的时候不需要知道它的类型，只在调用的时候设置他的类型，泛型可以用在接口，函数，类...
// 场景：创建一个数组函数
// 这样只能创建一个数字类型的函数，当我需要创建一个字符串类型的函数，就需要重新创建一个类似的函数
function createNumberArray(length, value) {
    return new Array(length).fill(value);
}
function createStringArray(length, value) {
    return new Array(length).fill(value);
}
// 这样就很繁琐了，下次要创建其他类型的数组时候又要创建一个类似的函数
// 那么就需要使用泛型来改造这个函数，泛型定义需要用 <T>表示
function createArray(length, value) {
    return new Array(length).fill(value);
}
var strArr = createArray(3, 'value');
var numArr = createArray(3, 2);
var booArr = createArray(2, false);
//# sourceMappingURL=11-generic.js.map