# verdaccio 指南

::: tip 前言
verdaccio是一个npm的代理工具，可以将私有的npm包发布至上面，提供权限控制的功能；也可以缓存下载的npm包，以加快再次下载的速度
github: https://github.com/verdaccio/verdaccio
:::

## 目的

一些公共的组件，service，或utils上传到npm。供各个项目使用。

如netwayapi ,witenssapi, bmsapi等。

建立verdaccio的意义在于，**提高不同的前端项目之间的代码复用率**

对于单个项目而言，MVVM框架、CSS预处理器的使用可以增强该项目的模块化程度，多次使用到的代码可以作为**公共模块抽离**出来

然而对于多个项目来说，可以维护私有的**npm公共模块**、**上层项目框架**，**增强代码复用**，**减少开发人员的重复劳动和出错机会**

## 本地如何下载和使用私包

1. 安装**nrm**，添加verdaccio作为可选的**npm源**

2. 切换至verdaccio源，登录dev账号即可使用 npm install @xzfe/* 下载指定的私包，亦可使用scope限制@xzfe以下的包使用该账号登录

## Jenkins构建

1. 前端项目在jenkins构建过程中，需要执行npm install，为了防止私仓被外部人员使用、保护代码安全，需要**先登录预设的deploy账号**

2. 在docker build的过程中，使用node-pty编写**运行npm login的prompt的脚本**，可实现**自动登录**

```js
const pty = require('node-pty')
const ptyProcess = pty.spawn('npm', ['login'])

const username = process.env.NPM_USERNAME
const passwd = process.env.NPM_PASSWD

let usernameDirty = false
let passwordDirty = false
let emailDirty = false

ptyProcess.on('data', (data) => {
  process.stdout.write(data)
  if (data.toString().toLowerCase().indexOf('username') !== -1 && !usernameDirty) {
    usernameDirty = true
    ptyProcess.write(`${username}\r\n`)
  }
  if (data.toString().toLowerCase().indexOf('password') !== -1 && !passwordDirty) {
    passwordDirty = true
    ptyProcess.write(`${passwd}\r\n`)
  }
  if (data.toString().toLowerCase().indexOf('email') !== -1 && !emailDirty) {
    emailDirty = true
    ptyProcess.write('zhi.huang@bluestonehk.com\r\n')
  }
  if (data.toString().toLowerCase().indexOf('logged in') !== -1) {
    console.log('\nlogged successfully!')
  }
})

```

3. 登录deploy账号后，**即可获取下载权限**，安装存储在verdaccio上的依赖