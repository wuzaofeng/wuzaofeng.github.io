(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{265:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e76bd516fb9a07cce750746",target:"_blank",rel:"noopener noreferrer"}},[t._v("（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"请写出你知道的http状态码以及含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请写出你知道的http状态码以及含义"}},[t._v("#")]),t._v(" 请写出你知道的http状态码以及含义")]),t._v(" "),a("p",[t._v("200, 状态请求成功")]),t._v(" "),a("p",[t._v("301，永久重定向")]),t._v(" "),a("p",[t._v("302, 临时重定向")]),t._v(" "),a("p",[t._v("304，缓存，服务器告诉客户端内容没有改变，直接拿缓存内容")]),t._v(" "),a("p",[t._v("400，参数错误")]),t._v(" "),a("p",[t._v("401，需要用户验证")]),t._v(" "),a("p",[t._v("403，禁止访问")]),t._v(" "),a("p",[t._v("404，没找到该资源")]),t._v(" "),a("p",[t._v("500，服务器错误")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("http"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"http有什么特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http有什么特点"}},[t._v("#")]),t._v(" http有什么特点")]),t._v(" "),a("ol",[a("li",[t._v("无状态")]),t._v(" "),a("li",[t._v("简单")]),t._v(" "),a("li",[t._v("快速")]),t._v(" "),a("li",[t._v("没有格式的限制")])]),t._v(" "),a("h2",{attrs:{id:"http和https区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http和https区别"}},[t._v("#")]),t._v(" http和https区别")]),t._v(" "),a("p",[t._v("由于http是简单无状态的，不适合传输敏感信息，比如银行卡，密码，为了安全考虑，所以出现了https")]),t._v(" "),a("p",[t._v("而https协议是通过CA证书，由ssl/tls + http协议构建，进行加密传输，和身份认证的网络协议")]),t._v(" "),a("p",[t._v("客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接")]),t._v(" "),a("p",[t._v("https\b 认证身份的时候是非对称加密  传输的时候是对称加密")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.php.cn/faq/418162.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP与HTTPS的区别"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"http1-1和http2-0区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-1和http2-0区别"}},[t._v("#")]),t._v(" http1.1和http2.0区别")]),t._v(" "),a("p",[t._v("HTTP2"),a("strong",[t._v("支持多路复用")])]),t._v(" "),a("p",[t._v("支持"),a("strong",[t._v("服务器推送")])]),t._v(" "),a("p",[t._v("支持"),a("strong",[t._v("压缩")])]),t._v(" "),a("h2",{attrs:{id:"说一下浏览器的缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下浏览器的缓存机制"}},[t._v("#")]),t._v(" 说一下浏览器的缓存机制")]),t._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),a("p",[t._v("第一次直接服务器请求，第二次直接拿缓存")]),t._v(" "),a("p",[t._v("强缓存方案")]),t._v(" "),a("p",[t._v("Exprires: 该资源什么时候会过期， 缺点就是需要客户端时间和服务器时间要同步")]),t._v(" "),a("p",[t._v("Cache-control：max-age：表示该资源多少时间后过期（毫秒）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6782944-2953183b0a2ab1dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/751/format/webp",alt:"1.jpg"}})]),t._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[t._v("第一次请求缓存且"),a("strong",[t._v("保存缓存标识与时间")]),t._v("，重复请求向服务器发送缓存标识和最后缓存时间，"),a("strong",[t._v("服务端进行校验")]),t._v("，如果失效则使用缓存")]),t._v(" "),a("p",[t._v("If-None-Match/ETag：缓存标识")]),t._v(" "),a("p",[t._v("Last-modified/If-Modified-Since: 表明请求的资源上次的修改时间")]),t._v(" "),a("h2",{attrs:{id:"web安全信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web安全信息"}},[t._v("#")]),t._v(" web安全信息")]),t._v(" "),a("h3",{attrs:{id:"xss-跨站攻击脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站攻击脚本"}},[t._v("#")]),t._v(" xss(跨站攻击脚本)")]),t._v(" "),a("ul",[a("li",[t._v("反射型（非存储）")])]),t._v(" "),a("p",[t._v("攻击者通过url的形式，添加一些恶意脚本，引诱被用户访问，用户点击之后，窃取用户数据，或者冒充用户请求数据")]),t._v(" "),a("p",[t._v("比如点击链接之后，执行脚本导致数据被攻击者知道")]),t._v(" "),a("ul",[a("li",[t._v("持久型（存储）")])]),t._v(" "),a("p",[t._v("攻击者将恶意脚本提交到目标网站的数据库中，用户打开目标网站时会执行该恶意脚本")]),t._v(" "),a("p",[t._v("比如发表文章，加入恶意脚本，导致其他用户观看该文章，暴露自己的数据")]),t._v(" "),a("ul",[a("li",[t._v("Dom型")])]),t._v(" "),a("p",[t._v("反射型和持久型，都是将恶意脚本解析执行该脚本")]),t._v(" "),a("p",[t._v("JavaScript 代码不够严谨\n.innerHTML、.outerHTML、.appendChild、document.write()")]),t._v(" "),a("p",[t._v("预防xss")]),t._v(" "),a("ol",[a("li",[t._v("转义，链接需要通过encodeURIComponent转义，前端显示转义，后端插入数据时也转义")]),t._v(" "),a("li",[t._v("用cookies httpOnly防止被截取cookies")]),t._v(" "),a("li",[t._v("Content-Security-Policy")]),t._v(" "),a("li",[t._v("输入内容长度控制")])]),t._v(" "),a("h3",{attrs:{id:"csrf（cross-site-request-forgery）跨站请求伪造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf（cross-site-request-forgery）跨站请求伪造"}},[t._v("#")]),t._v(" CSRF（Cross-site request forgery）跨站请求伪造")]),t._v(" "),a("p",[t._v("攻击者冒充用户，请求数据")]),t._v(" "),a("h4",{attrs:{id:"csrf的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf的特点"}},[t._v("#")]),t._v(" CSRF的特点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("攻击通常在第三方网站发起")])]),t._v(" "),a("li",[a("p",[t._v("攻击者是利用被攻击网站的登录凭证，冒充受害者提交操作")])]),t._v(" "),a("li",[a("p",[t._v("跨站请求（图片，超链接， cors）")])])]),t._v(" "),a("h4",{attrs:{id:"预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("添加验证码(体验不好)")])]),t._v(" "),a("li",[a("p",[t._v("判断请求的来源：检测Referer(并不安全，Referer可以被更改)")])]),t._v(" "),a("li",[a("p",[t._v("使用Token(主流)")])])]),t._v(" "),a("h3",{attrs:{id:"点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),a("p",[t._v("点击劫持是指在一个Web页面中隐藏了一个透明的iframe，用外层假页面诱导用户点击，实际上是在隐藏的frame上触发了点击事件进行一些用户不知情的操作")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YvetteLau/Blog/issues/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("【面试篇】寒冬求职之你必须要懂的Web安全"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"事件循环是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环是什么"}},[t._v("#")]),t._v(" 事件循环是什么")]),t._v(" "),a("p",[t._v("由于js是单线程，当我们调用函数的时候，js引擎会将函数放入到主线程执行，遇到异步函数的时候，如setimeOut, setInterval, http请求等，js引擎会将该回调函数放入到一个异步队列中，等到主线程执行完成之后，再去自动执行异步队列中的回调函数")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5e0a8d57f265da33a55fb33c",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端小智 事件循环"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"小程序-与-h5，app区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序-与-h5，app区别"}},[t._v("#")]),t._v(" 小程序 与 h5，app区别")]),t._v(" "),a("p",[t._v("小程序的优势")]),t._v(" "),a("ol",[a("li",[t._v("无需下载")]),t._v(" "),a("li",[t._v("打开速度快")]),t._v(" "),a("li",[t._v("开发成本低于app")])]),t._v(" "),a("p",[t._v("劣势")]),t._v(" "),a("ol",[a("li",[t._v("限制比较多， 页面大小不超过1M, 不能打开超过 5 个层级的页面")]),t._v(" "),a("li",[t._v("样式单一")]),t._v(" "),a("li",[t._v("只能在对应的应用中运行")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d87985d6fb9a06add4e6ac3#heading-81",target:"_blank",rel:"noopener noreferrer"}},[t._v("初中级前端面试题"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"假如移动端设备的尺寸是640px，-要实现1rem-16px，需要怎么实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#假如移动端设备的尺寸是640px，-要实现1rem-16px，需要怎么实现"}},[t._v("#")]),t._v(" 假如移动端设备的尺寸是640px， 要实现1rem = 16px，需要怎么实现")]),t._v(" "),a("p",[t._v("其实很简单，1rem是指html的font-size为16px\n也就是设备宽度/640， 等于设备的html的font-size/16（640的根元素的值）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshRem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outerWidth\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" px "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshRem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"接口如何防刷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口如何防刷"}},[t._v("#")]),t._v(" 接口如何防刷")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过"),a("strong",[t._v("ip限制")]),t._v("请求次数")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("http请求头校验")]),t._v("（host, user-Agent, Referer）")])]),t._v(" "),a("li",[a("p",[t._v("人机验证，无痕验证，"),a("strong",[t._v("验证码")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("网关控制流量")]),t._v("，对一个时间段出现流量异常，可以拒绝请求")])])]),t._v(" "),a("h2",{attrs:{id:"为什么for循环嵌套顺序会影响性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么for循环嵌套顺序会影响性能"}},[t._v("#")]),t._v(" 为什么for循环嵌套顺序会影响性能")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'two time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"统计-1-n-整数中出现-1-的次数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计-1-n-整数中出现-1-的次数"}},[t._v("#")]),t._v(" 统计 1 ~ n 整数中出现 1 的次数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"https是对称加密还是非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https是对称加密还是非对称加密"}},[t._v("#")]),t._v(" HTTPS是对称加密还是非对称加密")]),t._v(" "),a("p",[t._v("HTTPS 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段")])])}),[],!1,null,null,null);s.default=r.exports}}]);