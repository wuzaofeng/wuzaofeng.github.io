# vue相关的面试题

## 谈一下你对MVVM原理的理解

![1.jpg](./1.jpg)

说起`MVVM`, 那么就要说下以前的`MVC`模式，`MVC`模式，指的是用户在界面操作时，会请求服务器路由，路由会调用对应的控制器来处理，控制器会拿到数据之后，再返回给前端，页面重新渲染

MVVM: 传统的前端会通过操作dom，将数据渲染在页面上， 但MVVM不同， v就是视图，M就是数据，而VM, 就是vue内部帮我们实现了数据渲染操作，通过数据来驱动视图， 当数据有更新变化的时候，vue会自动的通知视图层更新数据（双向数据绑定）

## 请说一下响应式数据的原理？

![2.jpg](./2.jpg)

vue是通过`Object.defineProperty`，数据劫持来实现响应式数据的。当vue初始化数据的时候，会将data里面的数据通过setter, getter, 来劫持数据，
当对应属性，进行依赖收集到当前组件的watcher(渲染类型watcher), 当数据发生变化的时候，会通过watcher通知相关依赖进行更新。

```
// core/observer/index  defineReactive方法中
Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend() /* 收集依赖 */
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify() /**通知相关依赖进行更新**/
    }
  })
```

## 3.Vue中是如何检测数组变化?

* Vue是采用函数劫持的方式，来重写数组方法的
* Vue将data中的数组，**通过原型链来重写**，指向自己自定义的数组原型方法。当调用数组的api时，会调用自己定义的方法，从而检测数组变化

![3.jpg](./3.jpg)

```
// core/observer/array
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) { // 重写原型方法
  // cache original method
  const original = arrayProto[method] // 调用原数组的方法
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify() // 当调用数组方法后，手动通知视图更新
    return result
  })
})
```

## 4.为何Vue采用异步渲染?

理解：因为如果不采用异步更新，那么每次更新数据都会对当前组件进行**重新渲染**.所以为了**性能考虑**。 Vue
会在本轮数据更新后，再去异步更新视图!

![4.jpg](./4.jpg)

```
// core/observer/watcher
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }

// core/observer/scheduler
export function queueWatcher (watcher: Watcher) {
  const id = watcher.id
  if (has[id] == null) {
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue()
        return
      }
      nextTick(flushSchedulerQueue)
    }
  }
}
```

## 5.nextTick实现原理?

nextTick主要采用的是宏任务和微任务，通过定义一个异步方法，当多次调用nextTick的时候，会将回调函数通过数组的形式插入到队列中
![5.jpg](./5.jpg)

```
// core/util/next-ticks
// 定义个异步方法
let timerFunc
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

// nextTick实现
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc() // 执行异步方法
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

```

## 6. Vue中Computed的特点

Computed也是一个watcher，但他具有缓存，只有依赖的属性发生变化的时候，才会更新视图

![6.jpg](./6.jpg)

```
// core/instance/state
function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
  const isSSR = isServerRendering()

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm)
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
      }
    }
  }
}

function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) { // 如果依赖的值没发生变化,就不会重新求值
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}
```

## 7.Watch中的deep:true 是如何实现的

当用户指定了 watch 中的deep属性为 true 时，如果当前监控的值是对象类型。会对对象中的每一项进行求值，此时会将当前 watcher 存入到对应属性的依赖中，这样数组中对象发生变化时也会通知数据更新

```
core/observer/watcher

get () {
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()
      this.cleanupDeps()
    }
    return value
  }

core/observer/traverse

function _traverse (val: any, seen: SimpleSet) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}
```

## 8.Vue组件的生命周期

* `beforeCreate` 在实例初始化之后，数据观测(data observer) 之前被调用
* `created` 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：

数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el

* `beforeMount` 在挂载开始之前被调用：相关的 render 函数首次被调用

* `mounted`  el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子

* `beforeUpdate` 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前

* `updated` 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子

* `beforeDestroy` 实例销毁之前调用。在这一步，实例仍然完全可用

* `destroyed`  实例销毁后调用。调用后， Vue 实例指示的所有东西都会解绑定，所有的事件
监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用

**要掌握每个生命周期内部可以做什么事**

* `created` 实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求

* `mounted` 实例已经挂载完成，可以进行一些DOM操作

* `beforeUpdate` 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

* `updated` 可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 该钩子在服务器端渲染期间不被调用。

* `destroyed` 可以执行一些优化操作,清空定时器，解除绑定事件

![5-1.jpg](./5-1.jpg)
![5-2.jpg](./5-2.jpg)
![5-3.jpg](./5-3.jpg)

## 9.diff算法的时间复杂度

两个树的完全的 diff 算法是一个时间复杂度为 O(n3) , Vue 进行了优化·O(n3) 复杂度的问题转换成 O(n) 复杂度的问题(只比较同级不考虑跨级问题) 在前端当中， 你很少会跨越层级地移动Dom元素。 所 以 Virtual Dom只会对同一个层级的元素进行对比。

## 10.简述Vue中diff算法原理

* 1.先同级比较，在比较子节点

* 2.先判断一方有子节点一方没子节点的情况

* 3.比较都有子节点的情况, 递归比较子节点

[参考链接](./class.pdf)