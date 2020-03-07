# 前端面试之道的理解

## JS 异步编程及常考面试题

### 并发(Concurrency)与并行(Parallelism)的区别

并发是比如两个任务A, B, **同一时间段**通过**切换**来完成任务

并行是比如两个任务A, B, 同一时间点同时并行完成任务，A,B 互不影响

![并发和并行](./1.png)

::: tip 相关链接
[漫话：如何给女朋友解释什么是并发和并行](https://juejin.im/post/5bdf0667e51d450b267fe3e3)
:::

## JS 基础笔记
 
### 对象转换原始类型

1. 如果是字符串类型，通过 toString
2. 如果是数字类型，通过 valueOf
3. 如果都不是，先用 valueOf, 结果不是基础类型的话再调用 toString


### this

不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window

bind会生成新的函数

#### 绑定都优先级

1. new 的方式优先级最高
2. bind
3. obj.foo() 这种调用方式
4. foo()

注意，如果**箭头函数this被绑定**，就不会再被任何方式所改变
```
const obj = {
    a: () => {
        console.log(this)
    }
}
```
```
obj.a() // window
obj.a.bind(obj)
obj.a.call(obj) // window 
```

### == 和 ===比较

1. 先判断类型是否相同
2. 判断是不是null和undefined比较， 如果是就返回true
3. 是否是`string`和`number`比较，如果是，就将`string`转`number`
4. 一方存在是`boolean`，`boolean`转`number`
5. 一方是`object`, 另一方是`string`、`number` 或者 `symbol`, object转基本类型

```
[] == ![] // true

[] == false

[] == 0

'0' == 0

0 == 0
```

### 深拷贝
JSON.parse(JSON.stringify(object))

**缺点**
会忽略 undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象

### 原型

![原型图](./1.jpg)

* Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
* Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
* 函数的 prototype 是一个对象
* 对象的 __proto__ 属性指向原型， __proto__ 将对象和原型连接起来组成了原型链

* Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
除了以上两个特殊对象，其他对象都是通过构造器 new 出来的

[原型详情](https://github.com/KieSun/Dream/issues/2)