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
