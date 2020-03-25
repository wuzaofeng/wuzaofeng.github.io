## 浏览器

* [（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系](https://juejin.im/post/5e76bd516fb9a07cce750746)

## http有什么特点

1. 无状态
2. 简单
3. 快速
4. 没有格式的限制

## http和https区别

由于http是简单无状态的，不适合传输敏感信息，比如银行卡，密码，为了安全考虑，所以出现了https

而https协议是通过CA证书，由ssl/tls + http协议构建，进行加密传输，和身份认证的网络协议

客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接

[HTTP与HTTPS的区别](https://www.php.cn/faq/418162.html)

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


## web安全信息

### xss(跨站攻击脚本)

* 反射型（非存储）

攻击者通过url的形式，添加一些恶意脚本，引诱被用户访问，用户点击之后，窃取用户数据，或者冒充用户请求数据

比如点击链接之后，执行脚本导致数据被攻击者知道

* 持久型（存储）

攻击者将恶意脚本提交到目标网站的数据库中，用户打开目标网站时会执行该恶意脚本

比如发表文章，加入恶意脚本，导致其他用户观看该文章，暴露自己的数据

* Dom型

反射型和持久型，都是将恶意脚本解析执行该脚本

JavaScript 代码不够严谨
.innerHTML、.outerHTML、.appendChild、document.write()

预防xss

1. 转义，链接需要通过encodeURIComponent转义，前端显示转义，后端插入数据时也转义
2. 用cookies httpOnly防止被截取cookies
3. Content-Security-Policy
4. 输入内容长度控制

### CSRF（Cross-site request forgery）跨站请求伪造

攻击者冒充用户，请求数据

#### CSRF的特点

1. 攻击通常在第三方网站发起

2. 攻击者是利用被攻击网站的登录凭证，冒充受害者提交操作

3. 跨站请求（图片，超链接， cors）

#### 预防

1. 添加验证码(体验不好)

2. 判断请求的来源：检测Referer(并不安全，Referer可以被更改)

3. 使用Token(主流)

### 点击劫持

点击劫持是指在一个Web页面中隐藏了一个透明的iframe，用外层假页面诱导用户点击，实际上是在隐藏的frame上触发了点击事件进行一些用户不知情的操作

[【面试篇】寒冬求职之你必须要懂的Web安全](https://github.com/YvetteLau/Blog/issues/29)

## 事件循环是什么

由于js是单线程，当我们调用函数的时候，js引擎会将函数放入到主线程执行，遇到异步函数的时候，如setimeOut, setInterval, http请求等，js引擎会将该回调函数放入到一个异步队列中，等到主线程执行完成之后，再去自动执行异步队列中的回调函数

[前端小智 事件循环](https://juejin.im/post/5e0a8d57f265da33a55fb33c)

## 小程序 与 h5，app区别

小程序的优势
1. 无需下载
2. 打开速度快
3. 开发成本低于app

劣势
1. 限制比较多， 页面大小不超过1M, 不能打开超过 5 个层级的页面
2. 样式单一
3. 只能在对应的应用中运行

[初中级前端面试题](https://juejin.im/post/5d87985d6fb9a06add4e6ac3#heading-81)


