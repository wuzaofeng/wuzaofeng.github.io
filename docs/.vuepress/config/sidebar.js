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
      collapsable: false,
      children: [{
        title: '什么是表达式语句',
        path: '/learning/javascript/expression'
      }]
    }, {
      title: 'typescript',
      collapsable: false,
      children: [{
        title: '【好文】耗时一年整理，全网最全的TypeScript踩坑集锦 (纯 TS 问题)',
        path: '/learning/typescript/ts-collection-question'
      }, {
        title: '【好文】耗时一年整理，全网最全的TypeScript踩坑集锦 (tsconfig.json 常用配置项注释)',
        path: '/learning/typescript/ts-collection-config'
      }, {
        title: '【好文】耗时一年整理，全网最全的TypeScript踩坑集锦（React + TS 项目问题）',
        path: '/learning/typescript/ts-collection-react'
      }]
    }, {
      title: '前端工程化',
      collapsable: false,
      children: [{
        title: '【好文】企业级 Webpack 分享总结',
        path: '/learning/project/webpack'
      }]
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
    sidebarDepth: 2,
    children: [{
      title: '微信小程序内嵌webview问题',
      path: '/working/wechat/webview'
    }, {
      title: 'verdaccio 指南',
      path: '/working/verdaccio'
    }]
  }, {
    title: '面试笔记',
    collapsable: false,
    sidebarDepth: 1,
    children: [{
      title: '面试题',
      path: '/job/jobing1'
    }]
  }]
