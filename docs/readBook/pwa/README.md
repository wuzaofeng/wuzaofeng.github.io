# PWA应用实战

## 渐进式web应用优势

1.无链接状态下的可用性

2.加载速度快

3.推送通知

4.主屏幕快捷方式

5.媲美原生

## 笔记

1.必须要https才能注册`service worker`, 为了保护用户和防止中间人攻击

2.`service worker`有自己的作用域，有个有限控制范围，并且是由该文件的目录位置决定的。设置该限制

假如有个域名`https//www.test.com/aaa`, 如果该目录可以上传图片，文件，如果可以控制其他目录下的话，那么就可以上传文件`https//www.test.com/aaa/sw.js`,控制类似`https/www.test.com/bbb`等所有接口

也可以传入`scope`参数修改作用域
`nevigator.serviceWorker.register('/sw.js', {scope: '/'})`
