export {}
// 接口
// 接口用来约束函数传递的参数中对象里面的结构，定义接口使用关键字interface
interface Post {
  title: string
  content: string
}

function fn1(post: Post): void {
  console.log(post.title, post.content)
}

// 在接口的约束下，函数的参数多传或少传都会有报错，类型不对也会有报错
fn1({ title: 'title', content: 'content' })
// 同样声明变量也是这样
let post: Post = {
  title: '123',
  content: '213',
}

// 接口可以设置可选成员，只读成员，动态成员
// 可选成员，也就是约束这个属性可有可无，本质上就是设置为某个类型|undefined，只需要在属性上加个?
// 只读成员，就是只能读取，不能修改
interface Article {
  title: String
  content?: string
  readonly author: string
}
// content是可选成员，所以不传也不会有报错
let article1: Article = {
  title: 'typescript',
  author: 'typescript',
}
// 修改只读成员的话就会报下面的错误
// Cannot assign to 'author' because it is a read-only property.
// article1.author = '123'

// 动态成员就是可以随便添加，例如有时候需要等请求返回数据再设置给对象，那么动态成员就是这种时候用上
interface Cache {
  [prop: string]: string
}

let c: Cache = {}
c.name = '123'
c.timer = '123'
// 传入不是约束的string类型就会报错
// c.content = 123