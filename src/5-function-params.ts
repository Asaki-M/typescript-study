// 函数类型
// 定义一个只能传入两个number类型的函数，返回值也是number类型
// 函数调用时传入必须是两个number类型，多或少都是错误
function fn1(a: number, b: number): number {
  return a + b
}
// 若函数没有返回值则要设置为void
function fn2(): void {
  console.log(1)
}

// 使用变量保存函数，变量也要设置类型
let fn3: (name: string) => void = (name: string): void => {
  console.log(name)
}

// 函数想要随意传参个数，就需要使用默认值或者设置可选形参
// 可选参数必须要放在最后面
// function fn4(a: number, b?: number, ...rest: number[]): number {
//   return a + b + (rest && rest.reduce((pre, cur) => pre + cur))
// }
function fn4(a: number, b: number = 10, ...rest: number[]): number {
  return a + b + (rest && rest.reduce((pre, cur) => pre + cur))
}
fn4(1, 2, 10, 3)
fn4(1, 2)
fn4(1)
