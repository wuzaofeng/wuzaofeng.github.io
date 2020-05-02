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

1. for循环，通过let声明，会生成一个块级作用域，每次迭代循环时都**创建一个新变量**，并且会**修改**循环迭代之前同名的变量， const声明为报错，因为是const声明是常量，不能被修改

2. for in遍历对象, let声明，const声明是可以通过，因为不会修改之前的
同名变量

## 解构赋值

解构赋值可以解构**数组，对象，数字，字符串，函数参数**， 但不能解构`undefined`, `null`

1. 解构赋值优先使用**判断右边有没有值**，**没有值才取默认值**

2. 如果右边是`undefined`，会取默认值，但`null`不会

3. 如果要将已经声明的变量解构赋值，需要加**圆括号**

4. 数字，字符串解构会先传成包装对象

```js

// 错误的写法, 因为Javascript引擎会将{x}理解成一个代码块
let x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});

```

### 用途

1. **交换变量**的值

2. 从**函数返回**直接获取多个值

3. **函数参数的定义**直接获取值

4. 快速提取**对象，数组**数据

5. 函数参数**设置默认值**

## 字符串的扩展

加强对字符的`Unicode`的支持

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

* 错误被吃掉，Promise 内部的错误不会影响到 Promise 外部的代码, p

* resolve, reject只能传递单一值

* 无法取消

* 无法知道pending状态

#### `Promise.all()`

1. 只有都请求成功，那么才返回成功

2. 如果有一个是请求失败，那么就失败,会到catch

注意：如果Promise实例，自己有catch那么会先调用catch，然后如果没有reject, 那么会到Promise.all.then方法

##### 缺点

无法确定所有请求都结束

#### `Promise.race()`

实例中，根据最先返回的值改变状态，最先成功就成功，失败就失败

#### `Promise.any()`（第三阶段的提案）

只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态

#### `Promise.allSettled()`

必须等待实例全部返回结果才结束，只要有个成功，就进到then

##### 作用

不关心异步操作的结果，只关心这些操作有没有结束

#### `Promise.try()`

让同步函数同步执行，异步函数异步执行

```js
const f = () => console.log('now')
(async () => f())()
console.log('next')

// async () => f()会吃掉f()抛出的错误

(async () => f())()
.then(...)
.catch(...)
```

## Iterator

Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制,即`for...of`循环

### 场合

1.使用`for of`循环数据

数组, 类数组对象, map, set

2.解构赋值

对数组和 Set 结构进行解构赋值时，会默认调用`Symbol.iterator`方法

3.扩展运算符

4.yield*
