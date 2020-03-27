(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{253:function(t,e,r){"use strict";r.r(e);var a=r(0),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"浏览器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5e76bd516fb9a07cce750746",target:"_blank",rel:"noopener noreferrer"}},[t._v("（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"请写出你知道的http状态码以及含义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请写出你知道的http状态码以及含义"}},[t._v("#")]),t._v(" 请写出你知道的http状态码以及含义")]),t._v(" "),r("p",[t._v("200, 状态请求成功")]),t._v(" "),r("p",[t._v("301，永久重定向\n302, 临时重定向\n304，缓存，服务器告诉客户端内容没有改变，直接拿缓存内容")]),t._v(" "),r("p",[t._v("400，参数错误\n401，需要用户验证\n403，禁止访问\n404，没找到该资源")]),t._v(" "),r("p",[t._v("500，服务器错误")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("http"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"http有什么特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http有什么特点"}},[t._v("#")]),t._v(" http有什么特点")]),t._v(" "),r("ol",[r("li",[t._v("无状态")]),t._v(" "),r("li",[t._v("简单")]),t._v(" "),r("li",[t._v("快速")]),t._v(" "),r("li",[t._v("没有格式的限制")])]),t._v(" "),r("h2",{attrs:{id:"http和https区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http和https区别"}},[t._v("#")]),t._v(" http和https区别")]),t._v(" "),r("p",[t._v("由于http是简单无状态的，不适合传输敏感信息，比如银行卡，密码，为了安全考虑，所以出现了https")]),t._v(" "),r("p",[t._v("而https协议是通过CA证书，由ssl/tls + http协议构建，进行加密传输，和身份认证的网络协议")]),t._v(" "),r("p",[t._v("客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.php.cn/faq/418162.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP与HTTPS的区别"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"说一下浏览器的缓存机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说一下浏览器的缓存机制"}},[t._v("#")]),t._v(" 说一下浏览器的缓存机制")]),t._v(" "),r("h3",{attrs:{id:"强缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),r("p",[t._v("第一次直接服务器请求，第二次直接拿缓存")]),t._v(" "),r("p",[t._v("强缓存方案")]),t._v(" "),r("p",[t._v("Exprires: 该资源什么时候会过期， 缺点就是需要客户端时间和服务器时间要同步")]),t._v(" "),r("p",[t._v("Cache-control：max-age：表示该资源多少时间后过期（毫秒）")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/6782944-2953183b0a2ab1dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/751/format/webp",alt:"1.jpg"}})]),t._v(" "),r("h3",{attrs:{id:"协商缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),r("p",[t._v("第一次请求缓存且"),r("strong",[t._v("保存缓存标识与时间")]),t._v("，重复请求向服务器发送缓存标识和最后缓存时间，"),r("strong",[t._v("服务端进行校验")]),t._v("，如果失效则使用缓存")]),t._v(" "),r("p",[t._v("If-None-Match/ETag：缓存标识")]),t._v(" "),r("p",[t._v("Last-modified/If-Modified-Since: 表明请求的资源上次的修改时间")]),t._v(" "),r("h2",{attrs:{id:"web安全信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web安全信息"}},[t._v("#")]),t._v(" web安全信息")]),t._v(" "),r("p",[t._v("\b### xss(跨站攻击脚本)")]),t._v(" "),r("ul",[r("li",[t._v("反射型（非存储）")])]),t._v(" "),r("p",[t._v("攻击者通过url的形式，添加一些恶意脚本，引诱被用户访问，用户点击之后，窃取用户数据，或者冒充用户请求数据")]),t._v(" "),r("p",[t._v("比如点击链接之后，执行脚本导致数据被攻击者知道")]),t._v(" "),r("ul",[r("li",[t._v("持久型（存储）")])]),t._v(" "),r("p",[t._v("攻击者将恶意脚本提交到目标网站的数据库中，用户打开目标网站时会执行该恶意脚本")]),t._v(" "),r("p",[t._v("比如发表文章，加入恶意脚本，导致其他用户观看该文章，暴露自己的数据")]),t._v(" "),r("ul",[r("li",[t._v("Dom型")])]),t._v(" "),r("p",[t._v("反射型和持久型，都是将恶意脚本解析执行该脚本")]),t._v(" "),r("p",[t._v("JavaScript 代码不够严谨\n.innerHTML、.outerHTML、.appendChild、document.write()")]),t._v(" "),r("p",[t._v("预防xss")]),t._v(" "),r("ol",[r("li",[t._v("转义，链接需要通过encodeURIComponent转义，前端显示转义，后端插入数据时也转义")]),t._v(" "),r("li",[t._v("用cookies httpOnly防止被截取cookies")]),t._v(" "),r("li",[t._v("Content-Security-Policy")]),t._v(" "),r("li",[t._v("输入内容长度控制")])]),t._v(" "),r("h3",{attrs:{id:"csrf（cross-site-request-forgery）跨站请求伪造"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf（cross-site-request-forgery）跨站请求伪造"}},[t._v("#")]),t._v(" CSRF（Cross-site request forgery）跨站请求伪造")]),t._v(" "),r("p",[t._v("攻击者冒充用户，请求数据")]),t._v(" "),r("h4",{attrs:{id:"csrf的特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf的特点"}},[t._v("#")]),t._v(" CSRF的特点")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("攻击通常在第三方网站发起")])]),t._v(" "),r("li",[r("p",[t._v("攻击者是利用被攻击网站的登录凭证，冒充受害者提交操作")])]),t._v(" "),r("li",[r("p",[t._v("跨站请求（图片，超链接， cors）")])])]),t._v(" "),r("h4",{attrs:{id:"预防"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("添加验证码(体验不好)")])]),t._v(" "),r("li",[r("p",[t._v("判断请求的来源：检测Referer(并不安全，Referer可以被更改)")])]),t._v(" "),r("li",[r("p",[t._v("使用Token(主流)")])])]),t._v(" "),r("h3",{attrs:{id:"点击劫持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),r("p",[t._v("点击劫持是指在一个Web页面中隐藏了一个透明的iframe，用外层假页面诱导用户点击，实际上是在隐藏的frame上触发了点击事件进行一些用户不知情的操作")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/YvetteLau/Blog/issues/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("【面试篇】寒冬求职之你必须要懂的Web安全"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"事件循环是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件循环是什么"}},[t._v("#")]),t._v(" 事件循环是什么")]),t._v(" "),r("p",[t._v("由于js是单线程，当我们调用函数的时候，js引擎会将函数放入到主线程执行，遇到异步函数的时候，如setimeOut, setInterval, http请求等，js引擎会将该回调函数放入到一个异步队列中，等到主线程执行完成之后，再去自动执行异步队列中的回调函数")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5e0a8d57f265da33a55fb33c",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端小智 事件循环"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"小程序-与-h5，app区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序-与-h5，app区别"}},[t._v("#")]),t._v(" 小程序 与 h5，app区别")]),t._v(" "),r("p",[t._v("小程序的优势")]),t._v(" "),r("ol",[r("li",[t._v("无需下载")]),t._v(" "),r("li",[t._v("打开速度快")]),t._v(" "),r("li",[t._v("开发成本低于app")])]),t._v(" "),r("p",[t._v("劣势")]),t._v(" "),r("ol",[r("li",[t._v("限制比较多， 页面大小不超过1M, 不能打开超过 5 个层级的页面")]),t._v(" "),r("li",[t._v("样式单一")]),t._v(" "),r("li",[t._v("只能在对应的应用中运行")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d87985d6fb9a06add4e6ac3#heading-81",target:"_blank",rel:"noopener noreferrer"}},[t._v("初中级前端面试题"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"假如移动端设备的尺寸是640px，-要实现1rem-16px，需要怎么实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#假如移动端设备的尺寸是640px，-要实现1rem-16px，需要怎么实现"}},[t._v("#")]),t._v(" 假如移动端设备的尺寸是640px， 要实现1rem = 16px，需要怎么实现")]),t._v(" "),r("p",[t._v("其实很简单，1rem是指html的font-size为16px\n也就是设备宽度/640， 等于设备的html的font-size/16（640的根元素的值）")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("function refreshRem () {\nconst width = window.outerWidth\n    const px = width * 16 / 640;\n    console.log(px)\n    document.getElementsByTagName('html')[0].style.fontSize = px + 'px'\n}\nrefreshRem()\n")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);