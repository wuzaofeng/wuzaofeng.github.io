module.exports = [
  {
    title: '自动化部署静态文档',
    path: '/guide/',
    collapsable: false,
    sidebarDepth: 2,
  }, {
    title: '学习笔记',
    collapsable: false,
    sidebarDepth: 1,
    children: [{
      title: 'html',
      path: '/learning/html/'
    }, {
      title: 'CSS',
      path: '/learning/css/'
    }, {
      title: 'javascript',
      path: '/learning/javascript/'
    }]
  }, {
    title: '读书笔记',
    collapsable: false,
    children: [{
      title: '高性能javascript',
      path: '/readBook/HighPerformanceJS/'
    }]
  }, {
    title: '工作笔记',
    collapsable: false,
    sidebarDepth: 3,
    children: [{
      title: '微信小程序内嵌webview问题',
      path: '/working/wechat/webview'
    }, {
      title: 'verdaccio 指南',
      path: '/working/verdaccio'
    }]
  }]