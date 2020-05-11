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

```js
const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next
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

## generator 函数

调用`generator`函数，返回一个迭代器对象，代表着`generator`函数内部的指针，当迭代器对象调用next时，会返回`value`和`done`，引用到`yield`，如果遇到`return`就直接结束

### 原理

`generator`执行的时候，由于`js`是单线程的，每次只能执行一个函数，当执行`generator`的时候，遇到`yield`时候，上下文退出堆栈，内部状态冻结，第二次执行`g.next()`时，gen上下文重新加入堆栈，变成当前的上下文，重新恢复执行。

### 注意

1.`yield`紧跟着后面表达式，是惰性求值（`Lazy Evaluation`）的，当调用时才会开始计算

2.`yield`如果用在另一个表达式中，必须加上圆括号

```js
function* demo() {
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield 123)); // OK
}
```

3.`yield`表达式用作函数参数或放在赋值表达式的右边，可以不加括号

```js
function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}
```

4.`next`可以带一个参数，作为上一个`yield`的返回值, `yield`总是返回undefined

在**第一次**使用next方法时，传递参数是无效的

```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }
```

5.可以为对象添加迭代器`generator`

```js
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

// 方法一， 通过generator方法，返回迭代器对象
for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

// 方法二，挂在对象中symbol.iterator属性中
jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}
```

6.next()、throw()、return() 的共同点

* `next()`是将`yield`表达式替换成一个值

```js
const g = function* (x, y) {
  let result = yield x + y;
  return result;
};

const gen = g(1, 2);
gen.next(); // Object {value: 3, done: false}

gen.next(1); // Object {value: 1, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = 1;
```

* `throw()`是将`yield`表达式替换成一个`throw`语句

```js
gen.throw(new Error('出错了')); // Uncaught Error: 出错了
// 相当于将 let result = yield x + y
// 替换成 let result = throw(new Error('出错了'));
```

* `return()`是将`yield`表达式替换成一个`return`语句。

```js
gen.return(2); // Object {value: 2, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = return 2;
```

7.yield *
用于`generator`函数里面嵌套多一个`generator`
`yield *`后面紧跟着一个迭代器对象

## async

`Generator` 函数的语法糖

### 优点

1.有内置执行器，`generator`需要借助`co`模块

2.更好的语义

3.更广的适应性 `generator`只能`Promise`对象和`Thunk`函数，`async`如果是原始类型，会自动转成立即 resolved 的 `Promise` 对象`

4.返回值是`Promise`

`async`如果内部抛出错误，会直接进入`reject`状态

## `class`

1.类内部定义的方法是不可枚举的

2.不能直接当作函数执行

3.目前ES6 明确规定，Class 内部只有静态方法，没有静态属性，
**提案**提供了类的静态属性

```js
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}
```

4.为class加了私有属性。方法是在属性名之前，使用`#`表示, 也可以添加私有方法

```js
class Point {
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }
  #sum() {
    return #a + #b;
  }
  printSum() {
    console.log(this.#sum());
  }
}
```

### `new.target`属性

1.一般用在**构造函数**中

2.用于判断是不是通过`new`或者`Reflect.construct()`调用，如果不是，就返回`undefined`，可以判断是不是构造函数调用

### `super`用法

`super`指向父类的原型对象, 但在父类实例中的属性和方法是无法通过`super`获取

1.`super`作为函数调用时，代表父类的构造函数。`ES6` 要求，子类的构造函数必须执行一次`super`函数

2.`super`作为对象时，在普通方法中，指向父类的**原型对象**；在静态方法中，指向**父类**

```js
class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super(); // 作为函数调用
    console.log(super.p()); // 作为对象调用
  }
}

let b = new B();
```

注意

在子类普通方法中通过super调用父类的方法时，方法内部的**this指向当前的子类实例**

由于this指向子类实例，所以如果**通过super对某个属性赋值**，这时super就是this，赋值的属性会变成**子类实例的属性**

在子类的静态方法中通过super调用父类的方法时，方法内部的**this指向当前的子类**，而不是子类的实例

### es5和es6的继承区别

es5是先创建子类实例，再执行父类构造函数

es6是先通过`super`调用创建父类实例，然后在创建子类实例

## es6模块

差异

1.比`common`, `AMD`效率高，因为es6是编译时加载，静态加载，而前者是运行时加载

2.` ` 模块输出的是值的缓存，不存在动态更新

### 编译加载的优势


1.不需要在`umd`模块，服务器和浏览器都会支持 ES6 模块格式

2.新 API 就能用模块格式提供

3.不再需要对象作为命名空间,比如`Math`对象

### defer, async

defer是渲染完再执行
async是下载完就执行

### ES6 模块与 CommonJS 模块的差异

* `CommonJS` 模块输出的是一个**值的拷贝**，`ES6` 模块输出的是**值的引用**
* `CommonJS` 模块是**运行时加载**，`ES6` 模块是**编译时输出接口**