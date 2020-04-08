# 模拟实现

## call模拟实现

**思路**

1. 自定义该对象一个属性，值为该执行的函数， this可以获取到需要调用到函数

2. 执行函数， 传入参数(...args), 获取返回值

3. 删除函数

4. 返回值

```
Function.prototype.call2 = function (context, ...args) {
  var context = context || window
  // this 指的是调用它函数
  context.fn = this
  var result = context.fn(...args)
  delete context.fn
  return result
}
```

## apply 模拟实现

实现和call一样。只是传入参数传入是数组的形式

```
Function.prototype.apply2 = function (context, arr) {
  var context = context || window
  // this 指的是调用它函数
  context.fn = this
  var result = context.fn(...arr)
  delete context.fn
  return result
}
```

## bind 模拟实现

1. 返回一个函数

2. 可以传入参数， 可以在bind时候传入，也可以在返回函数的时候传入，两个参数拼接起来

3. 可以返回函数，用构造函数创建，this指向实例

[JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)

```
Function.prototype.bind = function (context, ...arr) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  const _self = this // bar
  const fBound = function (...bindArr) {
    // 如果是构造函数，那么this就是实例，那么通过instanceof 判断是true,是构造函数，否则就函数调用
    // 处理返回值
    return _self.apply(this instanceof fBound ? this : context, [...arr, ...bindArr])
  }

  // 返回的函数fBound继承一下当前调用函数的bar的原型
  fBound.prototype = Object.create(_self.prototype)
  // 等价于
  // function f () {}
  // f.prototype = _self.prototype
  // fBound.prototype = new f()

  return fBound
}
```

## new 实现

```
function objectFactory (constructor, ...args) {
  const obj = Object.create(null)
  obj._proto = constructor.prototype // 创建对象原型指向构造函数的原型上
  const result = constructor.apply(obj, [...args]) // 执行构造函数， 改变this
  return typeof result === 'object' ? result : obj // 如果构造函数返回对象，才返回，如果是基本类型则还是返回创建对象
}
```

## 防抖

```
function debounce (fn, wait) {
  let timeout result
  return function (...args) {
    if (timeout) clearTimeOut(timeout)
    timeout = setTimeOut(() => {
      fn.apply(this, args)
    }, wait)
  }
}
```

```
function debounce (fn, wait, immediate = false) {
  let timeout, result
  const debounced = function (...args) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 立即执行函数，停止n秒后才能再次触发
      // 如果已经执行过，就不会再执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = fn.apply(this, args)
    } else {
      timeout = setTimeout (() => {
        fn.apply(this, args)
      }, wait)
    }
    // 由于setTimeOut是延时执行，所以拿不到返回值
    // 当immediate为true 有返回值，false则为undefined
    return result
  }

  // 取消事件
  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

```

## 节流
```
function throttle(fn, wait) {
  let timeout
  return function (...args) {
    if (!timeout) {
      timeout = setTimeOut(() => {
        timeout = null
        fn.apply(this, args)
      }, wait)
    }
  }
}
```

```
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = null;
    }
    return throttled;
}
```