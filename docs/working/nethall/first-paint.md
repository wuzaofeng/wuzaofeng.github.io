# 网厅首屏优化

## 1. 跳转链接

不能通过直接改变window.loation.href跳转，需要通过router.push跳转，不然就是重新刷新页面

```
// 判断链接是否该项目的路由链接，如果是通过路由跳转，否则通过window.location.href跳转

// 跳转
export function toSkip (url, _this) {
  const { origin } = window.location
  const reg = new RegExp(`^${origin}`)
  // 判断是否当前域名地址
  if (reg.test(url)) {
    const _url = url.replace(reg, '')
    _this.$router.push(_url)
  } else {
    location.href = url
  }
```

## 2.该项目首屏渲染时渲染第三方的链接，比如高德地图，网易七鱼等第三方链接，按需加载链接

### 按需加载js

```
export function loadScript (url, key = '') {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.src = url
    document.body.appendChild(script)
    script.addEventListener('load', function () {
      resolve(key ? window[key] : '')
    })
    script.addEventListener('error', function (...params) {
      reject(params)
    })
  })
}
```

### 高德地图按需加载，并且实现单例模式

```
import { loadScript } from '@/utils/utils'
import config from '@/config'

class Map {
  constructor (AMap, key, v) {
    this.instance = null
    this._key = key
    this._v = v
    this.AMap = AMap // window传入的AMap
    this.map = new AMap.Map('') // 实例化的值
  }

  getLocation () {
    const _this = this
    return new Promise((resolve, reject) => {
      // 高德API获取定位
      _this.map.plugin('AMap.Geolocation', () => {
        let geoLocation = new _this.AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认：true
          timeout: 10000 // 设置定位超时时间，默认：无穷大
        })
        geoLocation.getCurrentPosition()
        _this.AMap.event.addListener(geoLocation, 'complete', (data) => {
          resolve(data)
        })
        _this.AMap.event.addListener(geoLocation, 'error', (error) => {
          reject(error)
        })
      })
    })
  }

  static async getInstance () {
    if (!this.instance) {
      const _v = '1.4.15'
      const _key = 'cbfc0b347323de3f78edf4145a93df26'
      if (!window.AMap) {
        await loadScript(`${config.loadScript.map}?v=${_v}&key=${_key}`, 'AMap')
      }
      this.instance = new Map(window.AMap, _key, _v)
    }
    return this.instance
  }
}
export default Map

```

### 七鱼

```
export function loadYSF () {
  return new Promise(async (resolve, reject) => {
    if (!window.ysf) {
      await loadScript(config.loadScript.qiyukf, 'ysf')
    }
    window.ysf('onready', function () {
      resolve(window.ysf)
    })
  })
}
```

## 遇到的问题

如果是封装在组件里面的，反复使用的npm包，比如exif.min.js，应该通过npm包引入

如果页面有引入两个相同的上传组件，那么就会同时加载script标签

