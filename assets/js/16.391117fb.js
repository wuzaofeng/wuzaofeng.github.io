(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{246:function(t,e,a){t.exports=a.p+"assets/img/example.88c77ef2.gif"},287:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"验证码封装组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码封装组件"}},[t._v("#")]),t._v(" 验证码封装组件")]),t._v(" "),s("h2",{attrs:{id:"效果设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果设计"}},[t._v("#")]),t._v(" 效果设计")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("点击验证码，有倒计时的效果")])]),t._v(" "),s("li",[s("p",[t._v("点击验证码之前事件触发，并且可以阻止发送验证码")])]),t._v(" "),s("li",[s("p",[t._v("发送验证码，发送完成之后，事件回调")])]),t._v(" "),s("li",[s("p",[t._v("发送验证码每一步，有相应的事件回调")])])]),t._v(" "),s("h2",{attrs:{id:"设计方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计方案"}},[t._v("#")]),t._v(" 设计方案")]),t._v(" "),s("h3",{attrs:{id:"props-设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-设计"}},[t._v("#")]),t._v(" props 设计")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("beforeFn 调用前回调事件，由于vue的this.$emit通知父组件，但是父组件调用的时候，子组件无法拿到父组件调用函数的返回值，所以使用props传递")])]),t._v(" "),s("li",[s("p",[t._v("endTime 定时器结束到的次数停止")])]),t._v(" "),s("li",[s("p",[t._v("txt 默认文案提示")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 点击前调用\nbeforeFn: {\n    type: [Function, null],\n    default: null\n},\npTime: {\n  type: Number,\n  defalut: 60\n},\n// 结束次数时间\nendTime: {\n    type: Number,\n    default: 0\n},\ntxt: {\n    type: String,\n    default: '获取验证码'\n}\n")])])]),s("h3",{attrs:{id:"data设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data设计"}},[t._v("#")]),t._v(" data设计")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\x3c!-- prop传递的倒计时次数 --\x3e\ndata () {\n    return {\n      timer: null,\n      time: this.pTime, // 倒数次数\n      disabled: false\n    }\n  }\n")])])]),s("h3",{attrs:{id:"点击触发事件-clickhandle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点击触发事件-clickhandle"}},[t._v("#")]),t._v(" 点击触发事件 clickHandle")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("async clickHandle () {\n  // 如果定时器已经触发，直接返回\n  if (this.timer) return\n\n  // 禁用点击按钮\n  this.disabled = true\n\n  // 点击前回调\n  if (this.beforeFn) {\n    // 点击前调用\n    const result = await this.beforeFn()\n    // 如果返回false，直接中止\n    if (!result) {\n      this.disabled = false\n      return\n    }\n  }\n\n  // 调用倒计时方法\n  this.setTimer()\n},\n")])])]),s("h3",{attrs:{id:"调用倒计时方法-settimer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用倒计时方法-settimer"}},[t._v("#")]),t._v(" 调用倒计时方法 setTimer")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("setTimer () {\n  this.timer = setTimeout(() => {\n    if (this.time > this.endTime) {\n      this.time -= 1\n\n      // 倒计时每一步，事件回调\n      this.$emit('on-each', this.time)\n      this.setTimer()\n    } else if (this.time === this.endTime) {\n\n      // 倒计时完成，事件回调\n      this.$emit('on-finish')\n\n      // 清空定时器\n      clearTimeout(this.timer)\n      this.disabled = false\n      this.timer = null\n      this.time = this.pTime\n    }\n  }, 1000)\n}\n")])])]),s("h3",{attrs:{id:"组件销毁时清除定时器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件销毁时清除定时器"}},[t._v("#")]),t._v(" 组件销毁时清除定时器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  beforeDestroy () {\n    this.timer && clearTimeout(this.timer)\n  }\n")])])]),s("h2",{attrs:{id:"最后倒计时效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后倒计时效果"}},[t._v("#")]),t._v(" 最后倒计时效果")]),t._v(" "),s("p",[s("img",{attrs:{src:a(246),alt:"checkcode"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);