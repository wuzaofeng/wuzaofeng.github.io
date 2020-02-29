# 面试题2

## vue和react为什么要推崇hook

在组件之间复用状态逻辑，多层嵌套，而抽象层都组件会形成嵌套地狱，因此react需要为共享状态提供一个更加适合都途径，那就是hook

代码精简， 复用的自定义 Hook

面向生命周期编程变成了面向业务逻辑编程

[从Mixins到HOC再到React Hooks](https://juejin.im/post/5d3184596fb9a07eeb13e12c#heading-17)

[React Hooks 深入不浅出](https://juejin.im/post/5bfe93566fb9a049c30af2db#heading-1)

## 当页面卡顿的时候

应该分析浏览器页面的请求，加载顺序，分析那个接口比较慢

再分析代码逻辑

## flex布局的了解(弹性布局)

当父元素的display设置成flex的时候，就会成一个弹性容器，那么子元素变成了弹性元素，flex分为主轴和侧轴，默认是主轴

**弹性容器**

* flex-direction(主轴的方向， 默认横向)
* flex-wrap（是否换行，默认不换行）
* flex-flow（direction和wrap的间写）(direction, wrap)
* justify-content(主轴对齐的方式)
* align-items（侧轴的对齐方式）
* align-content (多个主轴线的对齐方式)

**弹性元素**

* order（顺序排列，数字越小越在前面）（可以负数）
* flex-grow (放大的比例，默认0)
* flex-shrink (缩小的比例， 默认1)
* flex-basis(占据主轴的空间大小，默认auto)
* flex (none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'>)(简写)

* align-self（允许单个元素与其他不对齐）

flex 根据内容剩余空间占据的大小

三等份就是flex: 1, 应该说flex剩余空间比例的大小
如果不设置flex: 1，默认auto，是根据内容的大小伸缩
如果内容多，但还是想三等份（flex: 1就可以了）

[flex](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex)
[阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## 性能上有什么优化

其实的在项目上都有做这些优化，只是可能觉得太常识了
[前端性能优化总结](https://segmentfault.com/a/1190000017556203)

## 如果图片列表全部都显示优化

图片多的话，可以考虑用懒加载，下拉加载，分屏加载，缩略图

[web前端优化之图片优化](https://juejin.im/post/59a7725b6fb9a02497170459)


## 说一下浏览器的缓存机制

### 强缓存

第一次直接服务器请求，第二次直接拿缓存

强缓存方案

Exprires: 该资源什么时候会过期， 缺点就是需要客户端时间和服务器时间要同步

Cache-control：max-age：表示该资源多少时间后过期（毫秒）

![1.jpg](https://upload-images.jianshu.io/upload_images/6782944-2953183b0a2ab1dc.png?imageMogr2/auto-orient/strip|imageView2/2/w/751/format/webp)

### 协商缓存

第一次请求缓存且**保存缓存标识与时间**，重复请求向服务器发送缓存标识和最后缓存时间，**服务端进行校验**，如果失效则使用缓存

If-None-Match/ETag：缓存标识

Last-modified/If-Modified-Since: 表明请求的资源上次的修改时间

## 现在要你完成一个Dialog组件，说说你设计的思路？它应该有什么功能？

1. 该组件需要提供hook指定渲染位置，默认渲染在body下面。
2. 然后改组件可以指定外层样式，如宽度等
3. 组件外层还需要一层mask来遮住底层内容，点击mask可以执行传进来的onCancel函数关闭Dialog。
4. 另外组件是可控的，需要外层传入visible表示是否可见。
5. 然后Dialog可能需要自定义头head和底部footer，默认有头部和底部，底部有一个确认按钮和取消按钮，确认按钮会执行外部传进来的onOk事件，然后取消按钮会执行外部传进来的onCancel事件。
7. 当组件的visible为true时候，设置body的overflow为hidden，隐藏body的滚动条，反之显示滚动条。
8. 组件高度可能大于页面高度，组件内部需要滚动条。
9. 只有组件的visible有变化且为true时候，才重渲染组件内的所有内容。
