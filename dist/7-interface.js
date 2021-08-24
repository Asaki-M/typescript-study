"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn1(post) {
    console.log(post.title, post.content);
}
// 在接口的约束下，函数的参数多传或少传都会有报错，类型不对也会有报错
fn1({ title: 'title', content: 'content' });
// 同样声明变量也是这样
var post = {
    title: '123',
    content: '213',
};
// content是可选成员，所以不传也不会有报错
var article1 = {
    title: 'typescript',
    author: 'typescript',
};
var c = {};
c.name = '123';
c.timer = '123';
// 传入不是约束的string类型就会报错
// c.content = 123
//# sourceMappingURL=7-interface.js.map