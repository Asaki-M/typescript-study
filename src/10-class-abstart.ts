export {}
// 抽象类
// 抽象类可以定义一些抽象方法，子类继承这个抽象类就必须要实现这些抽象类
// 抽象类与接口不同的是，接口是只能定义抽象行为，而抽象类能定义抽象行为同时也能定义一些普通的方法
// 抽象类的定义使用 abstract 表明这个类是抽象类，抽象方法也需要在前面加上 abstract
abstract class Animal {
  eat(food: string): void {
    console.log(`咕噜咕噜:${food}`)
  }

  abstract run(action: string): void
}

class Dog extends Animal {
  run(action: string): void {
    console.log(`四脚爬行：${action}`)
  }
}

const dog = new Dog()
dog.eat('牛奶')
dog.run('起飞')

// 抽象类可以继承抽象类，继承的抽象类里面的抽象方法可以实现，也可以不实现给下一个继承自己的子类实现
abstract class T1 {
  abstract qifei(): void
}

abstract class T2 extends T1 {
  abstract qifei(): void
}

class T3 extends T2 {
  qifei(): void {
    console.log('芜湖，起飞')
  }
}
