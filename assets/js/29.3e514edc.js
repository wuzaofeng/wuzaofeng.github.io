(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{273:function(t,s,r){"use strict";r.r(s);var v=r(0),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"重学es6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重学es6"}},[t._v("#")]),t._v(" 重学es6")]),t._v(" "),r("h2",{attrs:{id:"循环中的-let-和-const"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#循环中的-let-和-const"}},[t._v("#")]),t._v(" 循环中的 let 和 const")]),t._v(" "),r("h3",{attrs:{id:"let-const特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#let-const特点"}},[t._v("#")]),t._v(" let, const特点")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("不会变量提升")])]),t._v(" "),r("li",[r("p",[t._v("不能重复定义变量")])]),t._v(" "),r("li",[r("p",[t._v("不能绑定在全局作用域，而是挂在在暂时死区（TDZ）")])])]),t._v(" "),r("h3",{attrs:{id:"块级作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[t._v("#")]),t._v(" 块级作用域")]),t._v(" "),r("p",[t._v("ES5 规定，函数只能在"),r("strong",[t._v("顶层作用域和函数作用域")]),t._v("之中声明，不能在"),r("strong",[t._v("块级作用域声明")])]),t._v(" "),r("p",[t._v("ES6")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("允许在块级作用域内声明函数")])]),t._v(" "),r("li",[r("p",[t._v("函数声明类似于var，即会提升到全局作用域或函数作用域的头部")])]),t._v(" "),r("li",[r("p",[t._v("同时，函数声明还会提升到所在的块级作用域的头部")])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[t._v("for循环，通过let声明，会生成一个块级作用域，每次迭代循环时都"),r("strong",[t._v("创建一个新变量")]),t._v("，并且会"),r("strong",[t._v("修改")]),t._v("循环迭代之前同名的变量， const声明为报错，因为是const声明是常量，不能被修改")])]),t._v(" "),r("li",[r("p",[t._v("for in遍历对象, let声明，const声明是可以通过，因为不会修改之前的同名变量")])])]),t._v(" "),r("h2",{attrs:{id:"原始symbol，表示独一无二的值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原始symbol，表示独一无二的值"}},[t._v("#")]),t._v(" 原始Symbol，表示独一无二的值")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Symbol 函数创建， 不能通过new创建")])]),t._v(" "),r("li",[r("p",[t._v("instanceof 结果是false")])]),t._v(" "),r("li",[r("p",[t._v("Symbol 不能与其他类型运算")])]),t._v(" "),r("li",[r("p",[t._v("Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回. 可以用Object.getOwnPropertySymbols方法调用")])])]),t._v(" "),r("p",[t._v("用途，挂在全局对象做单例模式")]),t._v(" "),r("h2",{attrs:{id:"for-of-循环（实际上就是调用symbol-iterator）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-of-循环（实际上就是调用symbol-iterator）"}},[t._v("#")]),t._v(" for...of 循环（实际上就是调用Symbol.iterator）")]),t._v(" "),r("ol",[r("li",[t._v("数组")]),t._v(" "),r("li",[t._v("Set")]),t._v(" "),r("li",[t._v("Map")]),t._v(" "),r("li",[t._v("类数组对象，如 arguments 对象、DOM NodeList 对象")]),t._v(" "),r("li",[t._v("Generator 对象")]),t._v(" "),r("li",[t._v("字符串")])]),t._v(" "),r("h2",{attrs:{id:"promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),r("h3",{attrs:{id:"回调地狱的坏处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回调地狱的坏处"}},[t._v("#")]),t._v(" 回调地狱的坏处")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("可读性差，通过函数嵌套函数")])]),t._v(" "),r("li",[r("p",[t._v("难以复用")])]),t._v(" "),r("li",[r("p",[t._v("借助外层的变量")])]),t._v(" "),r("li",[r("p",[t._v("有时候同步执行，异步函数无法区分开来")])])]),t._v(" "),r("h3",{attrs:{id:"promise-的局限性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-的局限性"}},[t._v("#")]),t._v(" Promise 的局限性")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("错误被吃掉，Promise 内部的错误不会影响到 Promise 外部的代码")])]),t._v(" "),r("li",[r("p",[t._v("resolve, reject只能传递单一值")])]),t._v(" "),r("li",[r("p",[t._v("无法取消")])]),t._v(" "),r("li",[r("p",[t._v("无法知道pending状态")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);