# js 面试题

## 对象拷贝

* 深拷贝：
通过利用`JSON.parse(JSON.stringify(Object))`来达到深拷贝的目的
但是JSON深拷贝的缺点是`undefined`和`function`还有`symbol`类型是无法进行深拷贝的
如有需要可以自己手动封装函数来达到目的

* 浅拷贝：
通过ES6新特性`Object.assign()`与扩展`...`运算符来达到浅拷贝的目的

## js继承

借助寄生组合继承

主要实现原理 B.prototype = Object.create(a.prototype) 继承`a`

当我们`new`关键字创建实例时，会有`B`自身的属性和方法以外，还有`a`原型上的方法

当实例化对象调用某个方法时会先在自身和原型上查找，然后是在_proto_上一层层查找，这种方式就是原型链

## addEventListener

1.给一个事件绑定多个监听器
2.可以控制触发的阶段（选择冒泡或者捕获）

```
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
```
第三个参数可以传入两种形式，boolean和对象

boolean(useCapture) 默认是false 冒泡阶段
options 有三个属性
* capture 默认false,冒泡阶段
* once 默认false 是否只调用一次
* passive 默认true listener不会调用preventDefault()（阻止默认行为）

[EventTarget.addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

## class 和 function 的区别

class创建本质上还是基于原型链， 更加符合面向对象的思维

1. class的静态方法的this，指向类，并非实例

2. class定义的方法不能使用object.keys遍历

3. class不能定义私有属性和方法

4. class只能用类名调用

## 谈谈作用域链机制

https://segmentfault.com/a/1190000018513150
https://www.cnblogs.com/dolphinX/p/3280876.html

## 箭头函数有没有 arguments 对象?

浏览器中执行没有arguments

nodejs中执行是有arguments

## js 精度丢失问题

由于数据存储在内存中是以二进制的形式存储，而某些值转成二进制会无限循环，由于位数有限，所以无限循环会自动四舍五入

```
0.1 + 0.2  = 0.30000000000000004
// 0.1 转成二进制会无限循环
// "0.000110011001100110011001100110011001100110011001100..."
```

##  js中不同进制怎么转换

10 进制转其他进制：Number(val).toString([2,8,10,16])

其他进制转成10进制：Number.parseInt("1101110",[2,8,10,16])

## 讲一讲 Promise
Promise是es6的规范

1.Promise有三个状态值，不可逆的，等待态（pedding）, 执行态(resolve), 拒绝态(reject)
2.提供了一个then方法。返回是个promise
3.可以链式调用

## 判断数组的几种方法
1. es6语法  Array.isArray()
2. obj instanceof Array 原型链查找
3. obj.constructor === Array 构造函数类型判断
4. Object.prototype.toString.call(obj) === '[object Array]' 

## 循环有几种方式，是否支持中断和默认情况下是否支持async/await

for 支持中断、支持异步事件
for of 支持中断、支持异步事件
for in 支持中断、支持异步事件
forEach 不支持中断、不支持异步事件
map 不支持中断、不支持异步事件，支持异步处理方法：map 返回promise数组，在使用 Promise.all 一起处理异步事件数组
```
// 使用async await 处理异步操作
let results = await Promise.all(arr.map(async (item) => {
	// 等待异步操作完成，返回执行结果
	return await asyncWorker(item);
}));

```

reduce 不支持中断、不支持异步事件，支持异步处理方法：返回值返回 promise 对象

## 请写出下面三次alert的结果
```
<script>
var a = 3
function change1 (a) {
    a = 4
}
change1(a)
alert(a)

var user = {age: 30}
function change2 (user) {
    user.age = 40
}

change2(user)
alert(user.age)

function change3 (user) {
    user = {age: 50}
}
change3(user)
alert(user.age)

</script>
```

结果 
1. 3 // 原始类型的值赋值，函数中获取的是参数
2. 40 // 引用类型的地址传入
3. 40 // 函数中的引用类型的重新赋值

## 右侧写出浏览器console执行完左侧代码以后的alert()内容， 提示接下来三行代码都会弹出三次弹窗

```
function test(a, b) {
    alert(b) 
    return {
        test: function (c, a) {
            return test(c, a)
        }
    }
}

code
1. var a = test(100, 200); a.test(300); a.test(400)
2. var b = test(101).test(201).test(401)
3. var c = test(102).test(202, 302); c.test()
```

1. 200，undefined, undefined

2. undefined, undefined, undefined

3. undefined, 302, undefined

## 设置a的值让条件 a==5&& a==8成立
```
const a = { value : 2 };
a.valueOf = function() {
    return this.value += 3;
};
console.log(a==5 && a== 8)
```
1. 判断类型
2. 判断null undefined
3. string == number ? string转number
4. boolean == any ? boolean转number
5. object == string ? number ? symbol ? object 调用valueOf toString

## a === 5 && a === 8

定义一个全局变量value
```
var value = 2;
Object.defineProperty(window, 'a', {
    get: function() {
        return this.value += 3;
    }
});
```

## 不使用for或者while， 创建一个长度为120的数组，并且每个元素的值等于数组长度减去它的下标

1. from + map
Array.from(new Array(120)).map((item,index)=>(120 - index))

2. from
Array.from(new Array(100), (item, index) => index)

3. reduce
Array.from(new Array(120)).reduce(function (pre, v, i, arr) {
    pre.push(arr.length - i)
    return pre
}, [])
