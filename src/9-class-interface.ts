export {}
// 类与接口
// 使用场景，一个人的类与一个动物的类都不是同一种类，但拥有相同的行为，就是吃和走，那么就可以使用接口来实现
// 规范中约定一个接口最好对应一个行为，这样需要那个行为就用那个行为，而不是将行为整合在一个接口中
interface RunAndEat {
  run(action: string): void
  eat(food: string): void
}

interface Run {
  run(action: string): void
}

interface Eat {
  eat(food: string): void
}

// 在类中使用接口需要关键字 implements
// 引入了接口，那么就必须要全部实现接口中的方法，少一个都会报错
// 使用多个接口的时候，接口之间使用逗号隔开
class Person implements Run, Eat {
  eat(food: string): void {
    console.log(`优雅的进食：${food}`)
  }

  run(action: string): void {
    console.log(`直立行走：${action}`)
  }

  play(): void {}
}

class Animal implements Run, Eat {
  eat(food: string): void {
    console.log(`咕噜咕噜：${food}`)
  }

  run(action: string): void {
    console.log(`爬行：${action}`)
  }
}
