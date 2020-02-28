# 面试题

## 面向对象(OO)和面向过程(OP)的区别

面向对象是什么？将问题才**分成各种对象**， 通过各个对象的**属性行为**，来解决问题

面向过程是什么？将问题分成**步骤**，一步步实现

面向对象是**宏观**的思考，而面向过程是**细节**的思考

例如，比如去饭店，去饭店客人**只在乎点菜**（面向对象），而不需要在乎菜是**怎么做**，而饭店在乎菜怎么来，怎么做，这就是面向过程

[参考资料](https://zhidao.baidu.com/question/2089034.html)

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

## 如何优化代码

1. 降低代码的**解偶性**

2. 提高函数的**复用**

3. **分离文件**

4. 纯函数

5. 添加代码注释

**对浏览器请求优化**

1. 添加雪碧图

2. 减少http请求数

3. 预加载，懒加载图片

4. 图片小的可以采用base64

5. js放入body后面，css放在顶部，css和js引用外部文件

6. 采用CDN

[优秀前端必知的话题：我们应该做些力所能及的优化](https://juejin.im/post/5bbc1b0c6fb9a05cf230140c)

[Web 研发模式演变 玉伯](https://github.com/lifesinger/lifesinger.github.com/issues/184)

[前后端分离的优缺点](https://www.cnblogs.com/wx-yy/p/10264317.html)

## 如何有效的二次封装

一般二次封装是为了更加灵活，为以后的修改更加便捷，易读，可扩展。

比如说我封装分页组件。如果不用封装多一层，会每个页面都引用该分页，那么当需要统一改分页的时候，带动的文件非常的多，而且有可能不小心改漏文件

如果统一管理，就不会有这个问题

## 前后端分离的优势和劣势

优势

1. 最大的好处就是前端可以通过js做大量的处理，http请求可以通过nginx转发，**减少服务器的压力**

2. 以前是jsp，前端代码和后端代码杂糅在一起，现在两边代码真正的解耦

3. 前后端职责很清晰， 分工明确， 提升开发效率

4. 部署相对独立

劣势

1. 代码不能复用

2. 全异步，对 SEO 不利

[为什么要前后端分离？有什么优缺点？(转)](https://www.cnblogs.com/651434092qq/p/11309535.html)

[实践中的前后端分离](https://juejin.im/post/59dad63ff265da065270d49e)

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

## webpack3 和 webpack4区别

1. mode

webpack增加了一个**mode配置**，只有两种值development | production。对不同的环境他会启用不同的配置。

2. CommonsChunkPlugin

**CommonChunksPlugin**已经从webpack4中移除。
可使用optimization.splitChunks进行模块划分（提取公用代码）。
但是需要注意一个问题，默认配置只会对异步请求的模块进行提取拆分，如果要对entry进行拆分
需要设置optimization.splitChunks.chunks = 'all'。

3. webpack4使用**MiniCssExtractPlugin**取代**ExtractTextWebpackPlugin**。

4. 代码分割。

使用**动态import**，而不是用system.import或者require.ensure

5. vue-loader。

使用vue-loader插件为.vue文件中的各部分使用相对应的loader，比如css-loader等

6. UglifyJsPlugin

现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

7. optimization.minimizer可以配置你自己的压缩程序

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

## 工作遇到的问题

1. [小程序的问题，webview](/working/wechat/webview)

2. 跨域项目跳转之后sessionStorage存储失效的问题

    避免session被别人知道。
    1. 一次性的标识， 类似于微信授权之后的code
    2. 如果两个是二级域名的话，可以将session放入主域名中，然后共享两个二级域名
    3. 保存id

3. 页面复用问题，可以考虑路由不同，组件相同

4. 私有仓库搭建，本地联调 symlinks 默认是true

5. jq table插件的封装，因为bootstrap2.0版本过低

6. 100vh的问题 苹果手机浏览器显示问题

5. [前端异常监听](/working/error/)

[2020 前端面试：第一波面试题总结](https://mp.weixin.qq.com/s/HPrVhg1x8oh47QZ5APXTsw)

[2020 前端面试：第二波面试题总结](https://juejin.im/post/5e44f20d6fb9a07cd323ca67#heading-2)
