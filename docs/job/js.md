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