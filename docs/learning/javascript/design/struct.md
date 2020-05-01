# 【好文】从JavaScript中看设计模式(总结)

::: tip 概念
设计模式 (Design Pattern) 是一套被反复使用、多数人知晓的、经过分类的、代码设计经验的总结
:::

任何事情都有套路，`设计模式`就是写代码中常见的套路，有些写法我们日常都在使用，下面我们来介绍一下

**创建设计模式**：工厂，单例、建造者、原型

**结构化设计模式**：外观，适配器，代理，装饰器，享元，桥接，组合

**行为型模式**：策略、模板方法、观察者、迭代器、责任链、命令、备忘录、状态、访问者、终结者、解释器

## 代理模式

代理模式的定义：为一个对象提供一个代用品或占位符，以便控制它的访问

常用的虚拟代理形式：某一个花销很大的操作，可以通过`虚拟代理的方式`延迟这种需要他的时候才去创建（例：使用虚拟代理实现图片懒加载）
图片懒加载的方式：先通过一张loading图`占位`，然后通过`异步的方式加载图片`，等图片加载好了再把请求成功的图片加载到img标签上

栗子:

```js
<!-- 插入图片函数 -->
const imgFunc = (() => {
    const imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return{
        setSrc: function(src){
            imgNode.src = src
        }
    }
})()

<!-- 代理函数 -->
const proxyImage = (() => {
  <!-- 创建image对象 -->
  let img = new Image()

  <!-- 加载完成再插入 -->
  img.onload = function(){
    imgFunc.setSrc(this.src)
  }
  return {
    <!-- 加载中插入loading图片 -->
    setSrc: function(src){
      imgFunc.setSrc('./loading.gif')
      img.src = src
    }
  }
})()
proxyImage.setSrc('./pic.png')()

```

在我们生活中常用的事件代理、`节流防抖函数`其实都是代理模式的实现

## 装饰器模式

::: tip 介绍
装饰器模式的定义：在**不改变**对象自身的基础上，在程序运行期间给对象**动态地添加方法**，**注解也可以理解为装饰器**。常见应用：**react的高阶组件**，或者react-redux中的@connect或者自己定义一些高阶组件
:::

简单实现:

```js
import React from 'react'
const withLog = Component => {
  // 完好无损渲染出来, 只是添加了两个生命周期函数
  class NewComponent extends React.Component{
    // 1
    componentWillMount(){
      console.time('ComponentRender')
      console.log('准备完毕了')
    }
    render(){  // 完好无损渲染出来
      return <Component { ...this.props }></Component>
    }
    // 2
    componentDidMount(){
      console.timeEnd('ComponentRender')
      console.log('渲染完毕了')
    }
  }
  return NewComponent
}
export { withLog }

@withLog
class xxx

```

在redux中可以找出装饰器的方式，其实Vue中的v-input，v-checkbox也可以认为是装饰器模式，对原生input和checkbox做一层装饰

::: tip 装饰器模式和代理模式区别

装饰器模式和代理模式的结构看起来非常相似
这两种模式都描述了怎样为**对象提供一定程度上的间接引用**，并且向**那个对象发送请求**。

代理模式和装饰器模式最重要的区别在于**它们的意图和设计目的**。

代理模式的目的是：当直接**访问本体不方便**或者**不符合需要**时，为这个本体提供一个替代者。

装饰模式目的是：为对象动态**加入的行为**，**本体定义了关键功能**，而**装饰器提供或拒绝它的访问**，或者**在访问本体前做一些额外的事**。
:::

## 外观模式

**外观模式的定义：**即在内部让多个方法一起被调用

举个简单的栗子

```js
// 封装一些事件，让其兼容各个浏览器
const myEvent = {
  stopBubble(e){
    if(typeof e.preventDefault() === 'function'){
      e.preventDefault()
    }
    if(typeof e.stopPropagation() === 'function'){
      e.stopPropagation()
    }
    // for IE
    if(typeof e.returnValue === 'boolean'){
      e.returnValue = false
    }
    if(typeof e.cancelBubble === 'boolean'){
      e.cancelBubble = false
    }
  },
  addEvent(dom, type, cb){
    if(dom.addEventListener){
      dom.addEventListener(type, cb, false)
    } else if(dom.attachEvent){
      dom.attachEvent('on' + type, cb)
    }else{
      dom['on' + type] = cb
    }
  }
}
```

以上就用外观模式封装了两个基本事件，让其兼容各种浏览器，调用者**不需要知道内部的构造**，只要知道**这个方法**怎么用就行了
如jq插件那些，只需要学会用，无需在乎内部的源码

## 享元模式(常用)

::: tip 定义
一种用于性能优化的模式，fly在这里是苍蝇的意思，意为蝇量级。享元模式的核心是**运用共享技术**来有效**支持大量细粒度**的**对象**。如果系统中因为创建了大量类似的对象而导致内存占用过高，享元模式就是非常有用了。在JavaScript中，浏览器特别是**移动端的浏览器分配的内存并不多**，如何节省内存就成了一件非常有意义的事情
:::

假设有个内衣工厂，目前的产品有50中男衣和50中女士内衣，为了推销产品，工厂决定生产一些塑料模特来穿上他们的内衣拍成广告照片。
正常情况下需要50个男模特和50个女模特，然后让他们每人分别穿上一件内衣来拍照

```js
const Model = function(sex, underwear){
  this.sex = sex
  this.underwear = underwear
}
Model.prototype.takePhoto = function(){
  console.log('sex=' + this.sex + ' underwear=' + this.underwear)
}
for(let i = 1; i <= 50; i++){
  let maleModel = new Model('male', 'underwear' + i)
  maleModel.takePhoto()
}
for(let join = 1; join <= 50; join++){
  let femaleModel = new Model('female', 'underwear' + join)
  femaleModel.takePhoto()
}

```

采用享元模式

其实无需创建多个模特，只需要一个女模特和一个男模特，让她们分别穿上衣服拍照，可以减少创建多成本

拍照，性别都是内部状态，而需要数量多少个，那就是外部状态

```js
const Model = function(sex){
  this.sex = sex
}
Model.prototype.takePhoto = function(){
  console.log('sex=' + this.sex + ' underwear=' + this.underwear)
}
// 分别创建一个男模特和一个女模特对象
let maleModel = new Model('male'),
    femaleModel = new Model('female')
// 给男模特依次穿上所有的男装，并进行拍照
for(let i = 1; i <= 50; i++){
  maleModel.underwear = 'underwear' + i
  maleModel.takePhoto()
}
// 给女模特依次穿上所有的女装，并进行拍照
for(let j = 1; j <= 50; j++){
  femaleModel.underwear = 'underwear' + j
  femaleModel.takePhoto()
}
```

* 内部状态存储于**对象内部**

* 内部状态可以被**一些对象共享**

* 内部状态独立于具体的场景，**通常不会改变**

* 外部状态取决于具体的场景，**并根据场景而变化**，外部状态不能被共享

## 适配器模式

::: tip 含义
适配器模式定义：**解决两个软件实体间的接口不兼容**的问题。

使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。

适配器的别名是包装器（wrapper），这是一个相对简单的模式。

在程序开发过程中有许多这样的**场景**：当我们试图调用模块或者对象的某个接口时，却发现这个接口的格式并不符合目前需求。
这时候有两种解决办法，第一种是修改原来的接口实现，但如果原来的模板很复杂，或者我们拿到模块是一段别人编写的经过压缩的代码，修改原接口就显得不太现实了。

第二种方法是创建一个适配器，将原接口转换为客户希望的另一个接口，客户只需要和适配器打交道
:::

::: tip 参考地址
[设计模式之适配器模式](https://www.cnblogs.com/TomXu/archive/2012/04/11/2435452.html)
:::
