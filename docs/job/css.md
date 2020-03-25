# CSS 面试题

## 扇形怎么画

[扇形实现](https://blog.csdn.net/young_Emily/article/details/80091667)

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

## 盒子模型

盒子模型是指html元素被分成内容content, 内边距padding, 边框 border, 外边距 margin

ie是比较特殊，包括padding和border
标准的是不包含padding和border

[从CSS盒子模型说起](https://juejin.im/post/5965bf105188250da35f11b2#heading-11)


