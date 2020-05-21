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
      collapsable: false,
      children: [{
        title: 'CSS选择器笔记',
        path: '/learning/css/select/'
      }]
    }, {
      title: 'javascript',
      collapsable: false,
      children: [{
        title: '重学JS',
        path: '/learning/javascript/deep/'
      }, {
        title: '重学es6',
        path: '/learning/javascript/deep/es6'
      }, {
        title: '模拟方法',
        path: '/learning/javascript/function'
      }, {
        title: '什么是表达式语句',
        path: '/learning/javascript/expression'
      }, {
        title: 'js继承的方法以及优缺点',
        path: '/learning/javascript/extends'
      }, {
        title: '设计模式(创建设计模式)',
        path: '/learning/javascript/design/create'
      }, {
        title: '设计模式(结构化设计模式)',
        path: '/learning/javascript/design/struct'
      }, {
        title: '设计模式(行为型设计模式)',
        path: '/learning/javascript/design/behaviour'
      }, {
        title: '推荐设计模式书籍',
        path: '/learning/javascript/design/book'
      }]
    },
    {
      title: 'vue',
      collapsable: false,
      children: [{
        title: 'vue2',
        path: '/learning/vue2/'
      }, {
        title: 'vue3',
        path: '/learning/vue3'
      }]
    },
    {
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
        path: '/learning/project/webpack/'
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
    }, {
      title: 'vue-cli3项目构建优化',
      path: '/working/webpack/'
    }, {
      title: '网厅首屏优化',
      path: '/working/nethall/first-paint'
    }, {
      title: '网厅首页开发问题笔记',
      path: '/working/nethall/home-bug/'
    }, {
      title: '验证码封装组件',
      path: '/working/nethall/validate-code/'
    }]
  }, {
    title: '面试笔记',  
    collapsable: false,
    sidebarDepth: 1,
    children: [{
      title: 'HTML面试题',
      path: '/job/html'
    }, {
      title: 'CSS面试题',
      path: '/job/css/'
    }, {
      title: 'JS面试题',
      path: '/job/js'
    }, {
      title: '浏览器面试题',
      path: '/job/browser'
    }, {
      title: '原理面试题',
      path: '/job/description'
    }, {
      title: '框架面试题',
      path: '/job/frame'
    }, {
      title: 'vue面试题',
      path: '/job/vue/'
    }, {
      title: '前端面试之道的理解',
      path: '/job/way/'
    }, {
      title: '工程类面试',
      path: '/job/project'
    }]
  }, {
    title: '工具破解链接',
    path: 'cracked'
  }, {
    title: 'Vue.js 技术揭秘',
    path: 'https://ustbhuangyi.github.io/vue-analysis/v2/prepare/'
  }]

