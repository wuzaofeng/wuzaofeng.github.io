# 框架面试题

## vue和react的优缺点, 以及vue和react选型

:::tip vue和react的优缺点

1. 从**写法**来看, vue使用的是`webpack+vue-loader`**单文件模版**的形式，而react是采用的是`jsx+inline-style`**js**, 一切都是js

2. 从**监听数据变化**来看，**vue优于react**, 因为vue采用的数据劫持，精确到数据的变化，但react采用的是比较引用的方式，不优化会产生大量的虚拟dom渲染

3. 从**数据驱动**来看, vue从2.0之后是和react一样，是**单向数据流**，vue的语法糖提供了**双向数据绑定**，react需要**自己来实现双向数据绑定**

4. 从**diff算法**来看

**vue**将此次生成好的虚拟dom树和上一次的虚拟dom树进行一次比对(diff算法进行比对)，来更新只需要被替换的DOM，而不是全部重绘。在Diff算法中，**只平层的比较前后两棵DOM树**的节点，没有进行**深度**的遍历

**react** DOM结构发生改变-----直接卸载并重新create, DOM结构一样-----不会卸载,但是会update变化的内容

vue会跟踪每一个组件的依赖关系，**不需要重新渲染**整个组件树。而对于React而言,每当应用的状态被改变时,**全部组件都会重新渲染**,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
    

5. 从**生态圈**来看，react大于生态圈

:::

:::tip vue和react选型

1. 如果希望通过**模版文件**的方式，**简单**，**能用就行**，而且**应用尽可能的小**，可以选择vue

2. 如果计划构建一个**大型应用程序**， 并且**兼容app和web框架**，最大的生态圈，选择react

3. 人员的规模，熟悉哪个技能，如果学习个新知识，需要花费的成本
:::

### vue2 与 vue3区别

vue2, 数据绑定的时候是通过es5的**Object.defineProperty**， set方法来实现数据劫持，一个弊端就是无法兼听到**数组**内部的数据变化
是通过**重写数组**常用的方法来实现

vue3，采用的是es6, **Proxy来实现数据劫持**，可以监听数组变化

[Vue2.x 与Vue3.x 双向数据绑定区别](https://segmentfault.com/a/1190000019101006?utm_source=tag-newest)

### 为什么react不精确数据变化？
跟**框架设计的原理**有关， vue和react的原理区别在于，vue的数据是**可变**的，而react数据是**不可变**的，

[vue和react的区别及各自优点](https://blog.csdn.net/tokki_/article/details/90726563)

[vue与react的对比，如何选型？从性能，生态圈，数据量，数据的传递上作对比](https://blog.csdn.net/scarsun/article/details/81636535)

[浅析React&Vue两大流行框架优缺点](https://www.jianshu.com/p/2781cb61d2d0)

## iview与其他组件的区别以及优势， 如何ui选型

ui选型，需要看打包之后的体积，**生态圈**是否足够强大，而且是否有专门的**团队长期维护**

选择iview是由于iview的小众组件优于element

iview相对于element更加容易上手，iview类似于react中的antd，table通过参数，而element需要v-for来循环每个列

但element生态圈比较强，维护ui的框架方便更加便捷

[Vue UI 框架对比 element VS iview](https://www.jianshu.com/p/5cee11d69b70)


## Vue的watch和computed区别

computed 是依赖于别的数据进行变动的，**具有缓存**

watch **监听**数据的变化

**使用场景**

1. 如果一个数据依赖于其他数据的简易计算处理的，那么使用computed比较合适

2. 如果需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

## Vue通讯

1. 父子组件，通过**Props，和$emit**来通讯

2. 中央事件总选 EventBus(基本不用)

3. vuex（状态管理器）

4. inject和provide 父孙组件

5. $parent和$children

6. $ref获取组件

## Vue data为什么是函数

组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，组件里面的data数据应该被隔离，互不影响

**当组件复用一次**， 应该**创建一个新当data值**，当这个组件data改变的时候，其他组件不受影响

## vue-cli3优化了什么

1. 目录清晰，简单，因为我们一般都会专于写业务代码

2. 引用了webpack4，构建速度更快

## vue和react为什么要推崇hook

在组件之间复用状态逻辑，多层嵌套，而抽象层都组件会形成嵌套地狱，因此react需要为共享状态提供一个更加适合都途径，那就是hook

代码精简， 复用的自定义 Hook

面向生命周期编程变成了面向业务逻辑编程

[从Mixins到HOC再到React Hooks](https://juejin.im/post/5d3184596fb9a07eeb13e12c#heading-17)

[React Hooks 深入不浅出](https://juejin.im/post/5bfe93566fb9a049c30af2db#heading-1)