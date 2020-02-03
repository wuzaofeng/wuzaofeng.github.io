module.exports = [
  {
    title: '自动化部署静态文档',
    path: '/guide/',
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2,    // 可选的, 默认值是 1
  }, {
    title: '学习笔记',
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
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
  }]