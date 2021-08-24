export {}
// 在文章发布场景中，一篇文章有多种状态，一直使用0，1，2不利于以后的维护开发
// 在js中可以使用一个对象声明
// const ArticleState = {
//     UnUpload: 0,
//     UnPublish: 1,
//     Published: 2
// }
// 在ts中有枚举类型使用，枚举中如果不指定值，就会默认从 0 递增，或者指定一个，后面的会在指定的递增
// 或者指定字符串值，指定字符串值就需要将每一个都要赋值
// 这种定义在编译后会变成双向引用在ArticleState变量中
// enum ArticleState {
//     UnUpload = 0,
//     UnPublish = 1,
//     Published = 2
// }
// 而使用声明定义就不会
const enum ArticleState {
    UnUpload = 0,
    UnPublish = 1,
    Published = 2
}
const article = {
    title: 'title',
    content: 'content',
    status: ArticleState.Published   // 0（未上传） | 1（未发布） | 2（已发布）
}