"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 抽象类
// 抽象类可以定义一些抽象方法，子类继承这个抽象类就必须要实现这些抽象类
// 抽象类与接口不同的是，接口是只能定义抽象行为，而抽象类能定义抽象行为同时也能定义一些普通的方法
// 抽象类的定义使用 abstract 表明这个类是抽象类，抽象方法也需要在前面加上 abstract
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("\u5495\u565C\u5495\u565C:" + food);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.run = function (action) {
        console.log("\u56DB\u811A\u722C\u884C\uFF1A" + action);
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.eat('牛奶');
dog.run('起飞');
// 抽象类可以继承抽象类，继承的抽象类里面的抽象方法可以实现，也可以不实现给下一个继承自己的子类实现
var T1 = /** @class */ (function () {
    function T1() {
    }
    return T1;
}());
var T2 = /** @class */ (function (_super) {
    __extends(T2, _super);
    function T2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2;
}(T1));
var T3 = /** @class */ (function (_super) {
    __extends(T3, _super);
    function T3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T3.prototype.qifei = function () {
        console.log('芜湖，起飞');
    };
    return T3;
}(T2));
//# sourceMappingURL=10-class-abstart.js.map