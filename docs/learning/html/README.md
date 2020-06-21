# html

## head 元信息的容器

### 具有 http-equiv 属性的 meta

* content-type 指定请求头

```html
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

* content-language 指定内容的语言
* default-style 指定默认样式表
* refresh 刷新
* set-cookie 模拟 http 头 set-cookie，设置 cookie
* x-ua-compatible 模拟 http 头 x-ua-compatible，声明 ua 兼容性
* content-security-policy 模拟 http 头 content-security-policy，声明内容安全策略

[具有 http-equiv 属性的 meta](https://blog.csdn.net/fancivez/article/details/44779233)

### name 为 viewport 的 meta

* width：**页面宽度**，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
* height：**页面高度**，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。
* initial-scale：**初始缩放比例**
* minimum-scale：**最小缩放比例**。
* maximum-scale：**最大缩放比例**。
* user-scalable：**是否允许用户缩放**。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
// 默认使用最新浏览器
<meta http-equiv="Cache-Control" content="no-siteapp">
// 不被网页(加速)转码
<meta name="robots" content="index,follow">
// 搜索引擎抓取
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
// 删除苹果默认的工具栏和菜单栏
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
// 设置苹果工具栏颜色

```