# 面试题

## 面向对象(OO)和面向过程(OP)的区别
面向对象是什么？将问题才**分成各种对象**， 通过各个对象的属性行为，来解决问题
面向过程是什么？将问题分成**步骤**，一步步实现

面向对象是**宏观**的思考，而面向过程是**细节**的思考

例如，比如去饭店，去饭店客人**只在乎点菜**（面向对象），而不需要在乎菜是**怎么做**，而饭店在乎菜怎么来，怎么做，这就是面向过程

[参考资料](https://zhidao.baidu.com/question/2089034.html)

## vue和react的优缺点, 以及vue和react选型

:::tip 如何选择vue还是react呢？

1. 从性能上来看，**vue优于react**, 因为vue采用的数据劫持，精确到数据的变化，但react采用的是比较引用的方式，不优化会产生大量的虚拟dom渲染

2. 从生态圈来看，react大于生态圈

3. 如果希望通过**模版文件**的方式，**简单**，**能用就行**，而且**应用尽可能的小**，可以选择vue

4. 如果计划构建一个**大型应用程序**， 并且**兼容app和web框架**，最大的生态圈，选择react
:::

从写法上来看
vue使用的是**单文件模版**的形式，而react是采用的是**js**, 一切都是js

从数据驱动来看
vue从2.0之后是和react一样，是**单向数据流**，vue的语法糖提供了**双向数据绑定**，react需要**自己来实现双向数据绑定**

从监听数据变化来看
vue采用的的是**数据劫持**的方式，能精确知道数据的变化，但react通过**比较引用**的方式，如果不优化可能导致大量的vdom渲染

### vue2 与 vue3区别

vue2, 数据绑定的时候是通过es5的**Object.defineProperty**， set方法来实现数据劫持，一个弊端就是无法兼听到数组内部的数据变化
是通过**重写数组**常用的方法来实现

vue3，采用的是es6, Proxy来实现数据劫持，可以监听数组变化

[Vue2.x 与Vue3.x 双向数据绑定区别](https://segmentfault.com/a/1190000019101006?utm_source=tag-newest)

### 为什么react不精确数据变化？
跟框架设计的原理有关， vue和react的原理区别在于，vue的数据是可变的，而react数据是不可变的，

[vue和react的区别及各自优点](https://blog.csdn.net/tokki_/article/details/90726563)

[vue与react的对比，如何选型？从性能，生态圈，数据量，数据的传递上作对比](https://blog.csdn.net/scarsun/article/details/81636535)

[浅析React&Vue两大流行框架优缺点](https://www.jianshu.com/p/2781cb61d2d0)

## iview与其他组件的区别以及优势， 如何ui选型

ui选型，需要看打包之后的体积，生态圈是否足够强大，而且是否有专门的团队长期维护

选择iview是由于iview的小众组件优于element

iview相对于element更加容易上手，iview类似于react中的antd，table通过参数，而element需要v-for来循环每个列

但element生态圈比较强，维护ui的框架方便更加便捷

[Vue UI 框架对比 element VS iview](https://www.jianshu.com/p/5cee11d69b70)

## 如何优化代码

1. 降低代码的解偶性

2. 提高函数的复用

3. 分离文件

4. 纯函数

5. 添加代码注释

对浏览器请求优化

1. 添加雪碧图

2. 减少http请求数

3. 预加载，懒加载图片

4. 图片小的可以采用base64

5. js放入body后面，css放在顶部，css和js引用外部文件

6. 采用CDN

[优秀前端必知的话题：我们应该做些力所能及的优化](https://juejin.im/post/5bbc1b0c6fb9a05cf230140c)
[前后端分离的优缺点](https://www.cnblogs.com/wx-yy/p/10264317.html)
[Web 研发模式演变 玉伯](https://github.com/lifesinger/lifesinger.github.com/issues/184)

## 如何有效的二次封装

一般二次封装是为了更加灵活，为以后的修改更加便捷，易读，可扩展。

比如说我封装分页组件。如果不用封装多一层，会每个页面都引用该分页，那么当需要统一改分页的时候，带动的文件非常的多，而且有可能不小心改漏文件

如果统一管理，就不会有这个问题

## 前后端分离的优势和劣势

优势

1. 最大的好处就是前端可以**通过js做大量的处理，http请求可以通过nginx转发，****减少服务器的压力**

2. 以前是jsp，前端代码和后端代码杂糅在一起，现在两边代码真正的解耦

3. 前后端职责很清晰， 分工明确， 提升开发效率

4. 部署相对独立

劣势

1. 代码不能复用

2. 全异步，对 SEO 不利

[为什么要前后端分离？有什么优缺点？(转)](https://www.cnblogs.com/651434092qq/p/11309535.html)

## Vue的watch和computed区别

computed 是依赖于别的数据进行变动的，具有缓存

watch **监听**数据的变化

**使用场景**

1. 如果一个数据依赖于其他数据的简易计算处理的，那么使用computed比较合适

2. 如果需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

## Vue通讯

1. 父子组件，通过**Props，和$emit**来通讯

2. 中央事件总选 EventBus(基本不用)

3. vuex（状态管理器）

4. $parent和$children

5. $ref获取组件

## Vue data为什么是函数

组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，组件里面的data数据应该被隔离，互不影响

当组件复用一次， 应该创建一个新当data值，当这个组件data改变的时候，其他组件不受影响

## vue-cli3优化了什么

1. 目录清晰，简单，因为我们一般都会专于写业务代码

2. 引用了webpack4，构建速度更快

## webpack3 和 webpack4区别

1. mode

webpack增加了一个mode配置，只有两种值development | production。对不同的环境他会启用不同的配置。

2. CommonsChunkPlugin

CommonChunksPlugin已经从webpack4中移除。
可使用optimization.splitChunks进行模块划分（提取公用代码）。
但是需要注意一个问题，默认配置只会对异步请求的模块进行提取拆分，如果要对entry进行拆分
需要设置optimization.splitChunks.chunks = 'all'。

3. webpack4使用MiniCssExtractPlugin取代ExtractTextWebpackPlugin。

4. 代码分割。

使用动态import，而不是用system.import或者require.ensure

5. vue-loader。

使用vue-loader插件为.vue文件中的各部分使用相对应的loader，比如css-loader等

6. UglifyJsPlugin

现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

optimization.minimizer可以配置你自己的压缩程序

## 小程序冷启动和热启动

小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。
假如用户已经打开过某小程序，然后在一定时间内（五分钟）再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；
冷启动指的是用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动

[微信小程序强制更新版本以及热启动和冷启动](https://blog.csdn.net/gwdgwd123/article/details/84869395)

## 扇形怎么画

[扇形实现](https://blog.csdn.net/young_Emily/article/details/80091667)

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

## http和https区别

由于http是简单无状态的，不适合传输敏感信息，比如银行卡，密码，为了安全考虑，所以出现了https

而https协议是通过CA证书，由ssl/tls + http协议构建，进行加密传输，和身份认证的网络协议

客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接

[HTTP与HTTPS的区别](https://www.php.cn/faq/418162.html)

[2020 前端面试：第一波面试题总结](https://mp.weixin.qq.com/s/HPrVhg1x8oh47QZ5APXTsw)

[2020 前端面试：第二波面试题总结](https://juejin.im/post/5e44f20d6fb9a07cd323ca67#heading-2)
