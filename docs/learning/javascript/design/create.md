# 【好文】设计模式(创建设计模式)

::: tip 概念
设计模式 (Design Pattern) 是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结
:::

任何事情都有套路，`设计模式`就是写代码中常见的套路，有些写法我们日常都在使用，下面我们来介绍一下

**创建设计模式**：工厂，单例、建造者、原型

**结构化设计模式**：外观，适配器，代理，装饰器，享元，桥接，组合

**行为型模式**：策略、模板方法、观察者、迭代器、责任链、命令、备忘录、状态、访问者、终结者、解释器

## 单例模式

::: tip 定义
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

## 工厂模式

工厂模式的定义：**提供创建对象的接口**，把成员对象的创建工作转交给一个外部对象，好处就是**消除对象直接的耦合**（也就是相互影响）

常见的栗子，我们的弹窗message，对外部提供API，都是调用API，然后新建一个弹窗或者message的实例，就是典型的工程模式

```
class Man {
  constructor(name) {
    this.name = name
  }
  say(){
      console.log(`我的名字 ` + this.name)
  }
}
const p = new Man('JavaScript')
p.say() // 我的名字 JavaScript
```

当然工厂模式并不仅仅是用来 new 出实例
可以想象一个场景。假设有一份很复杂的代码需要用户去调用，但是用户并**不关心**这些复杂的代码，**只需要你提供给我一个接口去调用**，用户只负责传递需要的参数，至于这些参数怎么使用，**内部有什么逻辑是不关心**的，只需要你最后返回我一个实例。这个构造过程就是工厂

```
const Notification = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  let userOnClose = options.onClose;
  let id = "notification_" + seed++;
  let postion = options.postion || "top-right";
  options.onClose = function() {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });
  if(isVNode(options.message)){
    instance.$slots.default = [options.message]
    options.message = 'REPLACED_BY_VNODE'
  }
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  instance.dom = instance.$el
  instance.dom.style.zIndex = PopupManager.nextZIndex()
  let verticalOffset = options.offset || 0
  instances.filter(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance

};
```

跟外观模式有点相似，都是无需在乎内部代码，但工厂模式一个是创建对象的设计模式（函数形式），外观另一个是对象包含各个函数

## 建造者模式Builder
建造者模式的定义：和工厂者模式相比，参与了**更多创建过程或者更加复杂**

```
const Person = function(name, work){
  // 创建应聘者缓存对象
  let _person = new Human()

  // 创建应聘者姓名解析对象
  _person.name = new NamedNodeMap(name)

  // 创建应聘者期望职位
  _person.work = new Worker(work)

  return _person
}
const p = new Person('小明', 'Java')
console.log(p)

```

## 原型模式
原型模式是**创建一个共享的原型**，通过拷贝这个原型来创建新的类，用于创建重复的对象，带来性能上的提升

### 方法一：使用 Object.create(prototype, optionalDescriptorObjects) 
```
var vehiclePrototype = {
    model:"保时捷",
    getModel: function () {
        console.log('车辆模具是：' + this.model);
    }
};

var vehicle = Object.create(vehiclePrototype,{
    "model":{
        value:"法拉利"
    }
});

vehicle.getModel();
```

### 方法二：使用 prototype
```
var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel || "保时捷";
    },
    getModel: function () {
        console.log('车辆模具是：' + this.model);
    }

};

function vehicle(model) {
    function F() { };
    F.prototype = vehiclePrototype;    
    var f = new F();
    f.init(model);
    return f;
}
var car = vehicle('法拉利');
car.getModel();
```
