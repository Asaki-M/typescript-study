export {}   // 防止变量与其他冲突
// object不单单是对象类型，可以是一个函数，对象，数组
const o1: object = function () {}
const o2: object = {}
const o3: object = []
const o4: object = new Date()
// 将对象类型赋值一个基础类型的值就会报错
// const o5: object = 123   // Type 'number' is not assignable to type 'object'.

// 这种定义法，只能按照对应的属性定义，并且对象属性不能多也不能少
// 否则就会报错，所以最好使用接口来定义，但可以用在函数的形参上
const o6: { foo: number; bar: string } = { foo: 123, bar: '213' }

// 数组类型，定义数组中的每一个都是number类型
const arr1: Array<number> = [1, 2, 3]
const arr2: number[] = [1, 2, 3]
const arr3: any[] = [123, '123', false]

// 元组类型, 不符合类型，多出或少了都会报错
const tuple: [string, number] = ['123', 123]
// 取值，可以使用数组下标或者数组解构赋值
const name: string = tuple[0]
const age: number = tuple[1]
const [n, a] = tuple