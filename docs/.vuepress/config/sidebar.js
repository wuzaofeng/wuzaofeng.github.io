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
  }]