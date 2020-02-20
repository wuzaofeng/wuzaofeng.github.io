# 【好文】从JavaScript中看设计模式(总结)

::: tip 概念
设计模式 (Design Pattern) 是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结
:::

任何事情都有套路，`设计模式`就是写代码中常见的套路，有些写法我们日常都在使用，下面我们来介绍一下

**创建设计模式**：工厂，单例、建造者、原型

**结构化设计模式**：外观，适配器，代理，装饰器，享元，桥接，组合

**行为型模式**：策略、模板方法、观察者、迭代器、责任链、命令、备忘录、状态、访问者、终结者、解释器

## 订阅/发布模式(观察者)

在这种模式中，并不是一个对象调用另一个对象的方法，而是一个对象`订阅`另一个对象

特定活动并在状态改变后获得通知，订阅者因此也成为观察者，而被观察的对象成为发布者或主题。当发生了一个重要事件的时候`发布者`会通知（调用）所有`订阅者`并且可能经常以`事件对象`的形式传递消息。

**自己实现一个简单的发布订阅设计模式**

```
// 订阅/发布者模式
class EventBus {
  constructor () {
    // 存储事件
    this.tasks = {}
  }

  // 绑定事件
  $on(eName, cb) {
    // 判断传入是否是函数，如果是函数则在task添加属性
    typeof cb === 'function' ? this.tasks[eName] || (this.tasks[eName] = []) :  this.Error(cb, 'is not a function')

    // 避免重复绑定，如果不存在则将cb函数添加进tasks的属性中
    this.tasks[eName].some(fn => fn == cb) ? true : this.tasks[eName].push(cb)
  }

  // 触发事件
  $emit(eName, ...arg) {
    let taskQueue;
    // 获取事件列
    this.tasks[eName] && this.tasks[eName].length > 0 ? (taskQueue = this.tasks[eName]) : this.Error(eName, 'is not defined or is a array of having empty callback')
    // 遍历task事件，并且执行事件列
    debugger
    taskQueue.forEach(fn => fn(...arg))
  }

  // 触发一次
  $once(eName, cb) {
    let fn = (...arg) => {
      // 删除订阅
      this.$off(eName, fn)
      cb(...arg)
    }

    typeof cb === 'function' && this.$on(eName, fn)
  }

  // 卸载事件
  $off(eName, cb) {
    let taskQueue;
    this.tasks[eName] && this.tasks[eName].length > 0
      ? (taskQueue = this.tasks[eName])
      : this.Error(eName, "is not exist");
    if (typeof cb === "function") {
      // 单独删除事件
      let index = taskQueue.findIndex(v => (v == cb));
      index != -1 &&
        taskQueue.splice(
          taskQueue.findIndex(v => (v == cb)),
          1
        );
    }
    // 删除事件列
    if (typeof cb === "undefined") {
      taskQueue.length = 0;
    }
  }
  // 异常处理
  Error(node, errorMsg) {
    throw Error(`${node} ${errorMsg}`);
  }
}

// 首先定义一个事件池
const EventSinks = {
  add(x, y) {
    console.log("总和: " + (x + y));
  },
  multip(x, y) {
    console.log("乘积: " + x * y);
  },
  onceEvent() {
    console.log("我执行一次后就自动卸载");
  }
};
```

```
// 实例化对象
let bus = new EventBus();
bus.$on("operator", EventSinks.add); // 监听operator事件, 增加一个EventSinks.add
bus.$on("operator", EventSinks.add); // 当事件名和回调函数相同时，跳过，避免重复绑定
bus.$on("operator", EventSinks.multip); // 给operator事件增加一个EventSinks.multip回调函数
bus.$once("onceEvent", EventSinks.onceEvent); // 触发一次后卸载
console.log(bus.tasks); // { operator: [ [Function: add], [Function: multip] ], onceEvent: [ [Function: fn] ]}

bus.$emit("operator", 3, 5); // 总和:8  乘积:15
bus.$emit("onceEvent"); // 我就执行一次
console.log(bus.tasks); // { operator: [ [Function: add], [Function: multip] ], onceEvent: [] }
bus.$off("operator", EventSinks.add); // 卸载掉operator事件中的EventSinks.add函数体
console.log(bus.tasks); // { operator: [ [Function: multip] ], onceEvent: [] }
bus.$off("operator"); // 卸载operator事件的所有回调函数
console.log(bus.tasks); // { operator: [], onceEvent: [] }
bus.$emit("onceEvent"); // onceEvent is not defined or is a array of having empty callback

```

::: tip 总结
EventBus 就是所谓的发布者的构造函数，当中的bus就是发布者的一个实例

我们调用$on, $once时，就是自定义订阅事件列

但我们调用$emit时，就是通知（发布）（执行）对应事件列

那么bus就是发布者

这个就是简单观察者模式，更高级的就是订阅发布者模式

:::

::: tip 观察者和发布订阅者模式的区别
从表面上看：

观察者模式里，只有两个角色 —— **观察者 + 被观察者**
而发布订阅模式里，却不仅仅只有**发布者和订阅者**两个角色，还有一个经常被我们忽略的 —— **经纪人Broker**
往更深层次讲：

观察者和被观察者，是松耦合的关系
发布者和订阅者，则完全不存在耦合
从使用层面上讲：

观察者模式，多用于**单个应用内部**
发布订阅模式，则更多的是一种**跨应用的模式**(cross-application pattern)，比如我们**常用的消息中间件**

[观察者模式和订阅发布者模式是一样么？](https://zhuanlan.zhihu.com/p/51357583)
:::

## 策略模式

策略模式的目的就是将算法的**使用算法的实现分离**出来

一个基于策略模式的程序至少由两部分组成。第一部分是一组`策略类`（可变），策略类封装了具体的算法，并负责具体的计算过程。第二部分是`环境类Context`（不变），`Context`接受客户的请求，随后将请求委托给某一个`策略类`。要做到这一点，说明Context中要维持对某个策略对象的引用

```
// 普通写法
const form = document.querySelector("#form");
form.onsubmit = () => {
  if (form.username.value == "") {
    console.log("用户名不能为空");
    return false;
  }
  if(form.username.password.length < 10){
    console.log('密码长度不能小于10')
    return false
  }
}
```

```
// 创建校验器
const checker = {
  isEmpty(v, errorMsg){
    if(value === ''){
      return errorMsg
    }
  },
  minLength(v, length, errorMsg){
    if(value.length < length){
      return errorMsg
    }
  }
}
const validator = () => {
  // 校验规则存储
  this.cache = []
}
validator.prototype.add = (...rule) => {
  let arr = rule.split(',')
  this.cache.push(() => {
    let valit = arr.shift()
    arr.unshift(dom.value)
    arr.push(errorMsg)
    return checker[valit].apply(dom, arr)
  })
}
validator.prototype.start = () => {
  for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];){
    // 开始校验，并取得校验后的返回值
    let msg = validatorFunc() 
    if(msg){
      return msg
    }
  }
}
const validatorFunc = () => {
  // 创建一个validator对象
  let valit = new validator() 
  valit.add(form.username, 'isEmpty', '用户名不能为空')
  valit.add(form.password, 'minLength', '密码长度不能小于10')
  // 获得校验结果
  let errorMsg = valit.start()  
  return errorMsg  
}

// 再次登录
const form = document.querySelector("#form");
form.onsubmit = () => {
  let errorMsg = validatorFunc()
  if(errorMsg){
    console.error(errorMsg)
    return false
  }
}
```

当创建校验器后，校验规则清晰明了，可以动态增改，便于维护
所谓的校验器就是策略类，而提供外部的validatorFunc方法则是环境类


## 迭代器模式
**迭代器模式定义**：指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

迭代器模式可以**把迭代的过程**从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素

比如常用的：every、map、filter、forEach等等
```
const each = function(arr, callback){
  if(!Array.isArray(arr)){
    throw Error(`${arr} is not a Array`)
  }
  for(let i = 0, l = arr.length; i < l; i++){
    callback.call(arr[i], i, arr[i])
  }
}
each([1,2,4], function(i, n){
  console.log([i, n])
})
<!-- [0, 1] -->
<!-- [1, 2] -->
<!-- [2, 4] -->
```

