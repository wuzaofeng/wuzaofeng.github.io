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
