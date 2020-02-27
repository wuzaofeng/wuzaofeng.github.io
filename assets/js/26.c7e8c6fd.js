(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{266:function(v,_,r){"use strict";r.r(_);var e=r(0),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"前端异常监听"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端异常监听"}},[v._v("#")]),v._v(" 前端异常监听")]),v._v(" "),r("p",[v._v("问题一 异常的显示问题")]),v._v(" "),r("p",[v._v("前几天生产项目上面突然报了个error的错误，加载中loading, 显示错误码，对用户体验很不好。")]),v._v(" "),r("p",[v._v("由于我这个项目比较简单，所以用jq来做的，当有报错误的时候，我会判断是网络异常还是后台返回的异常，都会跳转到不同的404， 500页面")]),v._v(" "),r("p",[v._v("有个问题，每次网络异常的时候每次都会直接跳转到网络异常的页面。我对这个做了个小小的优化，就是判断当网络异常的时候，我会刷新当前页面。用sessionStorage来记录刷新几次，当刷新到第三次的时候，还是异常的话，才会跳到异常页面")]),v._v(" "),r("p",[v._v("问题二 我们应该对这个异常进行捕获，收集异常")]),v._v(" "),r("p",[v._v("通常的异常")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("JS 语法错误、代码异常")])]),v._v(" "),r("li",[r("p",[v._v("AJAX 请求异常")])]),v._v(" "),r("li",[r("p",[v._v("静态资源加载异常")])]),v._v(" "),r("li",[r("p",[v._v("Promise 异常")])]),v._v(" "),r("li",[r("p",[v._v("Iframe 异常")])]),v._v(" "),r("li",[r("p",[v._v("跨域 Script error")])]),v._v(" "),r("li",[r("p",[v._v("崩溃和卡顿")])])]),v._v(" "),r("p",[v._v("::: tips 总结")]),v._v(" "),r("ol",[r("li",[v._v("可疑区域增加 Try-Catch")]),v._v(" "),r("li",[v._v("全局监控 JS 异常 window.onerror")]),v._v(" "),r("li",[v._v("全局监控静态资源异常 window.addEventListener")]),v._v(" "),r("li",[v._v("捕获没有 Catch 的 Promise 异常：unhandledrejection")]),v._v(" "),r("li",[v._v("VUE errorHandler 和 React componentDidCatch")]),v._v(" "),r("li",[v._v("监控网页崩溃：window 对象的 load 和 beforeunload")]),v._v(" "),r("li",[v._v("跨域 crossOrigin 解决")])]),v._v(" "),r("p",[v._v(":::")]),v._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/A6eSNyW1VS9EXFZpnAAYPQ",target:"_blank",rel:"noopener noreferrer"}},[v._v("如何优雅处理前端异常"),r("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=t.exports}}]);