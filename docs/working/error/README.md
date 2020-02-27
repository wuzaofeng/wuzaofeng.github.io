# 前端异常监听

问题一 异常的显示问题

前几天生产项目上面突然报了个error的错误，加载中loading, 显示错误码，对用户体验很不好。

由于我这个项目比较简单，所以用jq来做的，当有报错误的时候，我会判断是网络异常还是后台返回的异常，都会跳转到不同的404， 500页面

有个问题，每次网络异常的时候每次都会直接跳转到网络异常的页面。我对这个做了个小小的优化，就是判断当网络异常的时候，我会刷新当前页面。用sessionStorage来记录刷新几次，当刷新到第三次的时候，还是异常的话，才会跳到异常页面

问题二 我们应该对这个异常进行捕获，收集异常

通常的异常

* JS 语法错误、代码异常

* AJAX 请求异常

* 静态资源加载异常

* Promise 异常

* Iframe 异常

* 跨域 Script error

* 崩溃和卡顿

::: tips 总结

1. 可疑区域增加 Try-Catch
2. 全局监控 JS 异常 window.onerror
3. 全局监控静态资源异常 window.addEventListener
4. 捕获没有 Catch 的 Promise 异常：unhandledrejection
5. VUE errorHandler 和 React componentDidCatch
6. 监控网页崩溃：window 对象的 load 和 beforeunload
7. 跨域 crossOrigin 解决

:::

[如何优雅处理前端异常](https://mp.weixin.qq.com/s/A6eSNyW1VS9EXFZpnAAYPQ)