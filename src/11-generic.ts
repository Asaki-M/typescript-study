export {}
// 泛型
// 使用泛型可以提供一个函数的重用性，在声明的时候不需要知道它的类型，只在调用的时候设置他的类型，泛型可以用在接口，函数，类...
// 场景：创建一个数组函数
// 这样只能创建一个数字类型的函数，当我需要创建一个字符串类型的函数，就需要重新创建一个类似的函数
function createNumberArray(length: number, value: number): number[] {
  return new Array<number>(length).fill(value)
}

function createStringArray(length: number, value: string): string[] {
  return new Array<string>(length).fill(value)
}

// 这样就很繁琐了，下次要创建其他类型的数组时候又要创建一个类似的函数
// 那么就需要使用泛型来改造这个函数，泛型定义需要用 <T>表示
function createArray<T>(length: number, value: T): T[] {
  return new Array<T>(length).fill(value)
}

const strArr: string[] = createArray(3, 'value')
const numArr: number[] = createArray(3, 2)
const booArr: boolean[] = createArray(2, false)
