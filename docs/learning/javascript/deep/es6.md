# 重学es6

## 循环中的 let 和 const

### let, const特点

* 不会变量提升

* 不能重复定义变量

* 不能绑定在全局作用域，而是挂在在暂时死区（TDZ）

### 块级作用域

ES5 规定，函数只能在**顶层作用域和函数作用域**之中声明，不能在**块级作用域声明**

ES6

* 允许在块级作用域内声明函数

* 函数声明类似于var，即会提升到全局作用域或函数作用域的头部

* 同时，函数声明还会提升到所在的块级作用域的头部

2. for循环，通过let声明，会生成一个块级作用域，每次迭代循环时都**创建一个新变量**，并且会**修改**循环迭代之前同名的变量， const声明为报错，因为是const声明是常量，不能被修改

3. for in遍历对象, let声明，const声明是可以通过，因为不会修改之前的同名变量

## 原始Symbol，表示独一无二的值

1. Symbol 函数创建， 不能通过new创建

2. instanceof 结果是false

3. Symbol 不能与其他类型运算

4. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回. 可以用Object.getOwnPropertySymbols方法调用

用途，挂在全局对象做单例模式

## for...of 循环（实际上就是调用Symbol.iterator）

1. 数组
2. Set
3. Map
4. 类数组对象，如 arguments 对象、DOM NodeList 对象
5. Generator 对象
6. 字符串

## Promise

### 回调地狱的坏处

* 可读性差，通过函数嵌套函数

* 难以复用

* 借助外层的变量

* 有时候同步执行，异步函数无法区分开来

### Promise 的局限性

* 错误被吃掉，Promise 内部的错误不会影响到 Promise 外部的代码

* resolve, reject只能传递单一值

* 无法取消

* 无法知道pending状态


