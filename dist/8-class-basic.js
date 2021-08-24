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
// 定义一个类
var Person = /** @class */ (function () {
    function Person(name, age) {
        //   这样赋值必须在类中声明这个属性
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("hello, " + this.name + ", i am " + this.age);
    };
    return Person;
}());
// 类中的访问修饰符，可以用在类的方法/属性上
// public 可以自由访问到的，为默认值
// private 私有的，不能从类的外部访问
// protected 跟private差不多，不过它的子类可以访问到
// readonly 设置只读属性，只能在声明时赋初始值或者在构造函数中赋初始值，若有访问修饰符，readonly需要跟在访问修饰符后面
var Phone = /** @class */ (function () {
    function Phone(name, size) {
        this.name = name;
        this.size = size;
        this.prices = 1899;
    }
    return Phone;
}());
var phone1 = new Phone('huawei', '7寸');
console.log(phone1.name);
// console.log(phone1.size) // Property 'size' is private and only accessible within class 'Phone'.
// console.log(phone1.prices) // Property 'prices' is protected and only accessible within class 'Phone' and its subclasses.
// 定义Phone的一个子类
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(name, size) {
        var _this = _super.call(this, name, size) || this;
        // 子类可以读取的到父类声明 protected 的属性
        console.log(_this.prices);
        return _this;
        // 读取父类的size就会报错，因为private只能在声明的当前类中读取，外部读不了
        // Property 'size' is private and only accessible within class 'Phone'.
        // console.log(this.size)
    }
    return SmartPhone;
}(Phone));
//# sourceMappingURL=8-class-basic.js.map