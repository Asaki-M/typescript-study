"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 在类中使用接口需要关键字 implements
// 引入了接口，那么就必须要全部实现接口中的方法，少一个都会报错
// 使用多个接口的时候，接口之间使用逗号隔开
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        console.log("\u4F18\u96C5\u7684\u8FDB\u98DF\uFF1A" + food);
    };
    Person.prototype.run = function (action) {
        console.log("\u76F4\u7ACB\u884C\u8D70\uFF1A" + action);
    };
    Person.prototype.play = function () { };
    return Person;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u5495\u565C\u5495\u565C\uFF1A" + food);
    };
    Animal.prototype.run = function (action) {
        console.log("\u722C\u884C\uFF1A" + action);
    };
    return Animal;
}());
//# sourceMappingURL=9-class-interface.js.map