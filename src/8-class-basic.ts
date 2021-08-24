export {}

// 定义一个类
class Person {
  // 声明的变量必须要有初始值，可以在constructor，也可以像下方一样赋值
  name: string // = 'init name' 可以在声明的时候赋初始值（但没什么必要，因为一般都在constructor中赋初始值）
  age: number
  constructor(name: string, age: number) {
    //   这样赋值必须在类中声明这个属性
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`hello, ${this.name}, i am ${this.age}`)
  }
}

// 类中的访问修饰符，可以用在类的方法/属性上
// public 可以自由访问到的，为默认值
// private 私有的，不能从类的外部访问
// protected 跟private差不多，不过它的子类可以访问到
// readonly 设置只读属性，只能在声明时赋初始值或者在构造函数中赋初始值，若有访问修饰符，readonly需要跟在访问修饰符后面
class Phone {
  public name: string
  private size: string
  protected readonly prices: number
  constructor(name: string, size: string) {
    this.name = name
    this.size = size
    this.prices = 1899
  }
}

const phone1 = new Phone('huawei', '7寸')
console.log(phone1.name)
// console.log(phone1.size) // Property 'size' is private and only accessible within class 'Phone'.
// console.log(phone1.prices) // Property 'prices' is protected and only accessible within class 'Phone' and its subclasses.

// 定义Phone的一个子类
class SmartPhone extends Phone {
  constructor(name: string, size: string) {
    super(name, size)
    // 子类可以读取的到父类声明 protected 的属性
    console.log(this.prices)
    // 读取父类的size就会报错，因为private只能在声明的当前类中读取，外部读不了
    // Property 'size' is private and only accessible within class 'Phone'.
    // console.log(this.size)
  }
}
