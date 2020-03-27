(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{258:function(a,e,t){"use strict";t.r(e);var r=t(0),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"js-面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-面试题"}},[a._v("#")]),a._v(" js 面试题")]),a._v(" "),t("h2",{attrs:{id:"对象拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象拷贝"}},[a._v("#")]),a._v(" 对象拷贝")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("深拷贝：\n通过利用"),t("code",[a._v("JSON.parse(JSON.stringify(Object))")]),a._v("来达到深拷贝的目的\n但是JSON深拷贝的缺点是"),t("code",[a._v("undefined")]),a._v("和"),t("code",[a._v("function")]),a._v("还有"),t("code",[a._v("symbol")]),a._v("类型是无法进行深拷贝的\n如有需要可以自己手动封装函数来达到目的")])]),a._v(" "),t("li",[t("p",[a._v("浅拷贝：\n通过ES6新特性"),t("code",[a._v("Object.assign()")]),a._v("与扩展"),t("code",[a._v("...")]),a._v("运算符来达到浅拷贝的目的")])])]),a._v(" "),t("h2",{attrs:{id:"js继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js继承"}},[a._v("#")]),a._v(" js继承")]),a._v(" "),t("p",[a._v("借助寄生组合继承")]),a._v(" "),t("p",[a._v("主要实现原理 B.prototype = Object.create(a.prototype) 继承"),t("code",[a._v("a")])]),a._v(" "),t("p",[a._v("当我们"),t("code",[a._v("new")]),a._v("关键字创建实例时，会有"),t("code",[a._v("B")]),a._v("自身的属性和方法以外，还有"),t("code",[a._v("a")]),a._v("原型上的方法")]),a._v(" "),t("p",[a._v("当实例化对象调用某个方法时会先在自身和原型上查找，然后是在_proto_上一层层查找，这种方式就是原型链")]),a._v(" "),t("h2",{attrs:{id:"addeventlistener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[a._v("#")]),a._v(" addEventListener")]),a._v(" "),t("p",[a._v("1.给一个事件绑定多个监听器\n2.可以控制触发的阶段（选择冒泡或者捕获）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("target.addEventListener(type, listener, options);\ntarget.addEventListener(type, listener, useCapture);\n")])])]),t("p",[a._v("第三个参数可以传入两种形式，boolean和对象")]),a._v(" "),t("p",[a._v("boolean(useCapture) 默认是false 冒泡阶段\noptions 有三个属性")]),a._v(" "),t("ul",[t("li",[a._v("capture 默认false,冒泡阶段")]),a._v(" "),t("li",[a._v("once 默认false 是否只调用一次")]),a._v(" "),t("li",[a._v("passive 默认true listener不会调用preventDefault()（阻止默认行为）")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener",target:"_blank",rel:"noopener noreferrer"}},[a._v("EventTarget.addEventListener"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"class-和-function-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-和-function-的区别"}},[a._v("#")]),a._v(" class 和 function 的区别")]),a._v(" "),t("p",[a._v("class创建本质上还是基于原型链， 更加符合面向对象的思维")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("class的静态方法的this，指向类，并非实例")])]),a._v(" "),t("li",[t("p",[a._v("class定义的方法不能使用object.keys遍历")])]),a._v(" "),t("li",[t("p",[a._v("class不能定义私有属性和方法")])]),a._v(" "),t("li",[t("p",[a._v("class只能用类名调用")])])]),a._v(" "),t("h2",{attrs:{id:"谈谈作用域链机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈作用域链机制"}},[a._v("#")]),a._v(" 谈谈作用域链机制")]),a._v(" "),t("p",[a._v("https://segmentfault.com/a/1190000018513150\nhttps://www.cnblogs.com/dolphinX/p/3280876.html")]),a._v(" "),t("h2",{attrs:{id:"箭头函数有没有-arguments-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数有没有-arguments-对象"}},[a._v("#")]),a._v(" 箭头函数有没有 arguments 对象?")]),a._v(" "),t("p",[a._v("浏览器中执行没有arguments")]),a._v(" "),t("p",[a._v("nodejs中执行是有arguments")]),a._v(" "),t("h2",{attrs:{id:"js-精度丢失问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-精度丢失问题"}},[a._v("#")]),a._v(" js 精度丢失问题")]),a._v(" "),t("p",[a._v("由于数据存储在内存中是以二进制的形式存储，而某些值转成二进制会无限循环，由于位数有限，所以无限循环会自动四舍五入")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('0.1 + 0.2  = 0.30000000000000004\n// 0.1 转成二进制会无限循环\n// "0.000110011001100110011001100110011001100110011001100..."\n')])])]),t("h2",{attrs:{id:"js中不同进制怎么转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js中不同进制怎么转换"}},[a._v("#")]),a._v(" js中不同进制怎么转换")]),a._v(" "),t("p",[a._v("10 进制转其他进制：Number(val).toString([2,8,10,16])")]),a._v(" "),t("p",[a._v('其他进制转成10进制：Number.parseInt("1101110",[2,8,10,16])')]),a._v(" "),t("h2",{attrs:{id:"讲一讲-promise"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讲一讲-promise"}},[a._v("#")]),a._v(" 讲一讲 Promise")]),a._v(" "),t("p",[a._v("Promise是es6的规范")]),a._v(" "),t("p",[a._v("1.Promise有三个状态值，不可逆的，等待态（pedding）, 执行态(resolve), 拒绝态(reject)\n2.提供了一个then方法。返回是个promise\n3.可以链式调用")]),a._v(" "),t("h2",{attrs:{id:"判断数组的几种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断数组的几种方法"}},[a._v("#")]),a._v(" 判断数组的几种方法")]),a._v(" "),t("ol",[t("li",[a._v("es6语法  Array.isArray()")]),a._v(" "),t("li",[a._v("obj instanceof Array 原型链查找")]),a._v(" "),t("li",[a._v("obj.constructor === Array 构造函数类型判断")]),a._v(" "),t("li",[a._v("Object.prototype.toString.call(obj) === '[object Array]'")])]),a._v(" "),t("h2",{attrs:{id:"循环有几种方式，是否支持中断和默认情况下是否支持async-await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环有几种方式，是否支持中断和默认情况下是否支持async-await"}},[a._v("#")]),a._v(" 循环有几种方式，是否支持中断和默认情况下是否支持async/await")]),a._v(" "),t("p",[a._v("for 支持中断、支持异步事件\nfor of 支持中断、支持异步事件\nfor in 支持中断、支持异步事件\nforEach 不支持中断、不支持异步事件\nmap 不支持中断、不支持异步事件，支持异步处理方法：map 返回promise数组，在使用 Promise.all 一起处理异步事件数组")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 使用async await 处理异步操作\nlet results = await Promise.all(arr.map(async (item) => {\n\t// 等待异步操作完成，返回执行结果\n\treturn await asyncWorker(item);\n}));\n\n")])])]),t("p",[a._v("reduce 不支持中断、不支持异步事件，支持异步处理方法：返回值返回 promise 对象")]),a._v(" "),t("h2",{attrs:{id:"请写出下面三次alert的结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请写出下面三次alert的结果"}},[a._v("#")]),a._v(" 请写出下面三次alert的结果")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<script>\nvar a = 3\nfunction change1 (a) {\n    a = 4\n}\nchange1(a)\nalert(a)\n\nvar user = {age: 30}\nfunction change2 (user) {\n    user.age = 40\n}\n\nchange2(user)\nalert(user.age)\n\nfunction change3 (user) {\n    user = {age: 50}\n}\nchange3(user)\nalert(user.age)\n\n<\/script>\n")])])]),t("p",[a._v("结果")]),a._v(" "),t("ol",[t("li",[a._v("3 // 原始类型的值赋值，函数中获取的是参数")]),a._v(" "),t("li",[a._v("40 // 引用类型的地址传入")]),a._v(" "),t("li",[a._v("40 // 函数中的引用类型的重新赋值")])]),a._v(" "),t("h2",{attrs:{id:"右侧写出浏览器console执行完左侧代码以后的alert-内容，-提示接下来三行代码都会弹出三次弹窗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#右侧写出浏览器console执行完左侧代码以后的alert-内容，-提示接下来三行代码都会弹出三次弹窗"}},[a._v("#")]),a._v(" 右侧写出浏览器console执行完左侧代码以后的alert()内容， 提示接下来三行代码都会弹出三次弹窗")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function test(a, b) {\n    alert(b) \n    return {\n        test: function (c, a) {\n            return test(c, a)\n        }\n    }\n}\n\ncode\n1. var a = test(100, 200); a.test(300); a.test(400)\n2. var b = test(101).test(201).test(401)\n3. var c = test(102).test(202, 302); c.test()\n")])])]),t("ol",[t("li",[t("p",[a._v("200，undefined, undefined")])]),a._v(" "),t("li",[t("p",[a._v("undefined, undefined, undefined")])]),a._v(" "),t("li",[t("p",[a._v("undefined, 302, undefined")])])]),a._v(" "),t("h2",{attrs:{id:"设置a的值让条件-a-5-a-8成立"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置a的值让条件-a-5-a-8成立"}},[a._v("#")]),a._v(" 设置a的值让条件 a==5&& a==8成立")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const a = { value : 2 };\na.valueOf = function() {\n    return this.value += 3;\n};\nconsole.log(a==5 && a== 8)\n")])])]),t("ol",[t("li",[a._v("判断类型")]),a._v(" "),t("li",[a._v("判断null undefined")]),a._v(" "),t("li",[a._v("string == number ? string转number")]),a._v(" "),t("li",[a._v("boolean == any ? boolean转number")]),a._v(" "),t("li",[a._v("object == string ? number ? symbol ? object 调用valueOf toString")])]),a._v(" "),t("h2",{attrs:{id:"a-5-a-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-5-a-8"}},[a._v("#")]),a._v(" a === 5 && a === 8")]),a._v(" "),t("p",[a._v("定义一个全局变量value")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var value = 2;\nObject.defineProperty(window, 'a', {\n    get: function() {\n        return this.value += 3;\n    }\n});\n")])])]),t("h2",{attrs:{id:"不使用for或者while，-创建一个长度为120的数组，并且每个元素的值等于数组长度减去它的下标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不使用for或者while，-创建一个长度为120的数组，并且每个元素的值等于数组长度减去它的下标"}},[a._v("#")]),a._v(" 不使用for或者while， 创建一个长度为120的数组，并且每个元素的值等于数组长度减去它的下标")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("from + map\nArray.from(new Array(120)).map((item,index)=>(120 - index))")])]),a._v(" "),t("li",[t("p",[a._v("from\nArray.from(new Array(100), (item, index) => index)")])]),a._v(" "),t("li",[t("p",[a._v("reduce\nArray.from(new Array(120)).reduce(function (pre, v, i, arr) {\npre.push(arr.length - i)\nreturn pre\n}, [])")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);