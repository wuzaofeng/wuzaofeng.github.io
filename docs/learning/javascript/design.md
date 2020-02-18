# 【好文】从JavaScript中看设计模式(总结)

::: tips 概念
设计模式 (Design Pattern) 是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结
:::

任何事情都有套路，`设计模式`就是写代码中常见的套路，有些写法我们日常都在使用，下面我们来介绍一下

**创建设计模式**：工厂，单例、建造者、原型

**结构化设计模式**：外观，适配器，代理，装饰器，享元，桥接，组合

**行为型模式**：策略、模板方法、观察者、迭代器、责任链、命令、备忘录、状态、访问者、终结者、解释器


## 行为型模式

### 订阅/发布模式(观察者)

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

::: tips 总结
EventBus 就是所谓的发布者的构造函数，当中的bus就是发布者的一个实例

我们调用$on, $once时，就是自定义订阅事件列

但我们调用$emit时，就是通知（发布）（执行）对应事件列

那么bus就是发布者

这个就是简单观察者模式，更高级的就是订阅发布者模式

[观察者模式和订阅发布者模式是一样么？](https://zhuanlan.zhihu.com/p/51357583)
:::

## 创建设计模式

### 单例模式

::: tips 定义
单例模式的定义：`保证一个类仅有一个实例`，并提供一个访问它的全局访问点。实现的方法为`先判断实例存在与否`，如果存在则直接返回，否则就创建实例再返回，这就`保证了一个类只实例化一次`
:::

```
class Singleton {
  constructor() {}
}

Singleton.getInstance = (function() {
  let instance
  return function() {
    // 判断是否有存在的实例，如果没有就创建实例，否则就返回存在的实例
    if (!instance) {
      instance = new Singleton()
    }
    // 闭包的作用导致instance存在于内存中
    return instance
  }
})()

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2) // true

```
