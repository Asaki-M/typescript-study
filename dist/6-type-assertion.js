"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型断言
var nums = [1, 2, 3, 4];
// 当我们有一个明确知道的number类型数组时, 在严格模式下，ts并不知道这个数组中是否能找到
// 因此res就会被推断为 number | undefined
var res = nums.find(function (i) { return i > 0; });
// 但是我们能明确知道res是一个number类型，是可以找到的，这时候就要告诉ts，res就是一个number类型
// 这就是类型断言
var num1 = res;
// 使用尖括号这种方式在 jsx 中可能就会有冲突，因此还是使用 as 好一点
var num2 = res;
var sum = num1 + num2;
//# sourceMappingURL=6-type-assertion.js.map