(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{257:function(e,t,v){"use strict";v.r(t);var r=v(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"框架面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#框架面试题"}},[e._v("#")]),e._v(" 框架面试题")]),e._v(" "),v("h2",{attrs:{id:"vue和react的优缺点-以及vue和react选型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue和react的优缺点-以及vue和react选型"}},[e._v("#")]),e._v(" vue和react的优缺点, 以及vue和react选型")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("vue和react的优缺点")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("从"),v("strong",[e._v("写法")]),e._v("来看, vue使用的是"),v("code",[e._v("webpack+vue-loader")]),v("strong",[e._v("单文件模版")]),e._v("的形式，而react是采用的是"),v("code",[e._v("jsx+inline-style")]),v("strong",[e._v("js")]),e._v(", 一切都是js")])]),e._v(" "),v("li",[v("p",[e._v("从"),v("strong",[e._v("监听数据变化")]),e._v("来看，"),v("strong",[e._v("vue优于react")]),e._v(", 因为vue采用的数据劫持，精确到数据的变化，但react采用的是比较引用的方式，不优化会产生大量的虚拟dom渲染")])]),e._v(" "),v("li",[v("p",[e._v("从"),v("strong",[e._v("数据驱动")]),e._v("来看, vue从2.0之后是和react一样，是"),v("strong",[e._v("单向数据流")]),e._v("，vue的语法糖提供了"),v("strong",[e._v("双向数据绑定")]),e._v("，react需要"),v("strong",[e._v("自己来实现双向数据绑定")])])]),e._v(" "),v("li",[v("p",[e._v("从"),v("strong",[e._v("diff算法")]),e._v("来看")])])]),e._v(" "),v("p",[v("strong",[e._v("vue")]),e._v("将此次生成好的虚拟dom树和上一次的虚拟dom树进行一次比对(diff算法进行比对)，来更新只需要被替换的DOM，而不是全部重绘。在Diff算法中，"),v("strong",[e._v("只平层的比较前后两棵DOM树")]),e._v("的节点，没有进行"),v("strong",[e._v("深度")]),e._v("的遍历")]),e._v(" "),v("p",[v("strong",[e._v("react")]),e._v(" DOM结构发生改变-----直接卸载并重新create, DOM结构一样-----不会卸载,但是会update变化的内容")]),e._v(" "),v("p",[e._v("vue会跟踪每一个组件的依赖关系，"),v("strong",[e._v("不需要重新渲染")]),e._v("整个组件树。而对于React而言,每当应用的状态被改变时,"),v("strong",[e._v("全部组件都会重新渲染")]),e._v(",所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制")]),e._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[e._v("从"),v("strong",[e._v("生态圈")]),e._v("来看，react大于生态圈")])])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("vue和react选型")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("如果希望通过"),v("strong",[e._v("模版文件")]),e._v("的方式，"),v("strong",[e._v("简单")]),e._v("，"),v("strong",[e._v("能用就行")]),e._v("，而且"),v("strong",[e._v("应用尽可能的小")]),e._v("，可以选择vue")])]),e._v(" "),v("li",[v("p",[e._v("如果计划构建一个"),v("strong",[e._v("大型应用程序")]),e._v("， 并且"),v("strong",[e._v("兼容app和web框架")]),e._v("，最大的生态圈，选择react")])]),e._v(" "),v("li",[v("p",[e._v("人员的规模，熟悉哪个技能，如果学习个新知识，需要花费的成本")])])])]),e._v(" "),v("h3",{attrs:{id:"vue2-与-vue3区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue2-与-vue3区别"}},[e._v("#")]),e._v(" vue2 与 vue3区别")]),e._v(" "),v("p",[e._v("vue2, 数据绑定的时候是通过es5的"),v("strong",[e._v("Object.defineProperty")]),e._v("， set方法来实现数据劫持，一个弊端就是无法兼听到"),v("strong",[e._v("数组")]),e._v("内部的数据变化\n是通过"),v("strong",[e._v("重写数组")]),e._v("常用的方法来实现")]),e._v(" "),v("p",[e._v("vue3，采用的是es6, "),v("strong",[e._v("Proxy来实现数据劫持")]),e._v("，可以监听数组变化")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000019101006?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue2.x 与Vue3.x 双向数据绑定区别"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"为什么react不精确数据变化？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么react不精确数据变化？"}},[e._v("#")]),e._v(" 为什么react不精确数据变化？")]),e._v(" "),v("p",[e._v("跟"),v("strong",[e._v("框架设计的原理")]),e._v("有关， vue和react的原理区别在于，vue的数据是"),v("strong",[e._v("可变")]),e._v("的，而react数据是"),v("strong",[e._v("不可变")]),e._v("的，")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/tokki_/article/details/90726563",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue和react的区别及各自优点"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/scarsun/article/details/81636535",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue与react的对比，如何选型？从性能，生态圈，数据量，数据的传递上作对比"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/2781cb61d2d0",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅析React&Vue两大流行框架优缺点"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"iview与其他组件的区别以及优势，-如何ui选型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#iview与其他组件的区别以及优势，-如何ui选型"}},[e._v("#")]),e._v(" iview与其他组件的区别以及优势， 如何ui选型")]),e._v(" "),v("p",[e._v("ui选型，需要看打包之后的体积，"),v("strong",[e._v("生态圈")]),e._v("是否足够强大，而且是否有专门的"),v("strong",[e._v("团队长期维护")])]),e._v(" "),v("p",[e._v("选择iview是由于iview的小众组件优于element")]),e._v(" "),v("p",[e._v("iview相对于element更加容易上手，iview类似于react中的antd，table通过参数，而element需要v-for来循环每个列")]),e._v(" "),v("p",[e._v("但element生态圈比较强，维护ui的框架方便更加便捷")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.jianshu.com/p/5cee11d69b70",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue UI 框架对比 element VS iview"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"vue的watch和computed区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue的watch和computed区别"}},[e._v("#")]),e._v(" Vue的watch和computed区别")]),e._v(" "),v("p",[e._v("computed 是依赖于别的数据进行变动的，"),v("strong",[e._v("具有缓存")])]),e._v(" "),v("p",[e._v("watch "),v("strong",[e._v("监听")]),e._v("数据的变化")]),e._v(" "),v("p",[v("strong",[e._v("使用场景")])]),e._v(" "),v("ol",[v("li",[v("p",[e._v("如果一个数据依赖于其他数据的简易计算处理的，那么使用computed比较合适")])]),e._v(" "),v("li",[v("p",[e._v("如果需要在某个数据变化时做一些事情，使用watch来观察这个数据变化")])])]),e._v(" "),v("h2",{attrs:{id:"vue通讯"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue通讯"}},[e._v("#")]),e._v(" Vue通讯")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("父子组件，通过"),v("strong",[e._v("Props，和$emit")]),e._v("来通讯")])]),e._v(" "),v("li",[v("p",[e._v("中央事件总选 EventBus(基本不用)")])]),e._v(" "),v("li",[v("p",[e._v("vuex（状态管理器）")])]),e._v(" "),v("li",[v("p",[e._v("inject和provide 父孙组件")])]),e._v(" "),v("li",[v("p",[e._v("$parent和$children")])]),e._v(" "),v("li",[v("p",[e._v("$ref获取组件")])])]),e._v(" "),v("h2",{attrs:{id:"vue-data为什么是函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-data为什么是函数"}},[e._v("#")]),e._v(" Vue data为什么是函数")]),e._v(" "),v("p",[e._v("组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，组件里面的data数据应该被隔离，互不影响")]),e._v(" "),v("p",[v("strong",[e._v("当组件复用一次")]),e._v("， 应该"),v("strong",[e._v("创建一个新当data值")]),e._v("，当这个组件data改变的时候，其他组件不受影响")]),e._v(" "),v("h2",{attrs:{id:"vue-cli3优化了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3优化了什么"}},[e._v("#")]),e._v(" vue-cli3优化了什么")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("目录清晰，简单，因为我们一般都会专于写业务代码")])]),e._v(" "),v("li",[v("p",[e._v("引用了webpack4，构建速度更快")])])]),e._v(" "),v("h2",{attrs:{id:"vue和react为什么要推崇hook"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue和react为什么要推崇hook"}},[e._v("#")]),e._v(" vue和react为什么要推崇hook")]),e._v(" "),v("p",[e._v("在组件之间复用状态逻辑，多层嵌套，而抽象层都组件会形成嵌套地狱，因此react需要为共享状态提供一个更加适合都途径，那就是hook")]),e._v(" "),v("p",[e._v("代码精简， 复用的自定义 Hook")]),e._v(" "),v("p",[e._v("面向生命周期编程变成了面向业务逻辑编程")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5d3184596fb9a07eeb13e12c#heading-17",target:"_blank",rel:"noopener noreferrer"}},[e._v("从Mixins到HOC再到React Hooks"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.im/post/5bfe93566fb9a049c30af2db#heading-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Hooks 深入不浅出"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"vue-的响应式原理中-object-defineproperty-有什么缺陷？为什么在-vue3-0-采用了-proxy，抛弃了-object-defineproperty"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-的响应式原理中-object-defineproperty-有什么缺陷？为什么在-vue3-0-采用了-proxy，抛弃了-object-defineproperty"}},[e._v("#")]),e._v(" Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("Object.defineProperty无法监控到"),v("strong",[e._v("数组下标")]),e._v("的变化")])]),e._v(" "),v("li",[v("p",[e._v("Object.defineProperty只能劫持"),v("strong",[e._v("对象的属性")]),e._v("， 如果，属性值是对象，还需要深度遍历， "),v("strong",[e._v("Proxy可以劫持整个对象，并返回一个新的对象")])])]),e._v(" "),v("li",[v("p",[e._v("Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性")])])]),e._v(" "),v("h2",{attrs:{id:"在输入框中如何判断输入的是一个正确的网址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在输入框中如何判断输入的是一个正确的网址"}},[e._v("#")]),e._v(" 在输入框中如何判断输入的是一个正确的网址")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("function isUrl(url) {\n       try {\n           new URL(url);\n           return true;\n       }catch(err){\n     return false;\n}}\n")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);