const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: '前端知识体库',
  head:[
		['link',{rel:'icon',href:'/img/favicon.ico'}]
	],
  themeConfig: {
    logo: '/img/logo.jpeg',
    nav,
    sidebar,
  },
  plugins: ['@vuepress/back-to-top']
}