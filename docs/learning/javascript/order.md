# JS 语言在引擎级别的执行过程

## 作用域 Scope
查找名字，如果没有就向上查找

## es5后 环境Environment

es5之后作用域这一块更加规范化

词法环境规范被细化成环境记录规范

执行表达式，
执行语句
展开语法[...x] | (...x)

switch 会产生一块作用域是共用的作用域
所有case共用一个作用域
```
var a = 1

switch(a) {
    case 1:
        let b = 2
        console.log(b)
    case 2:
        let b = 3
        console.log(b)
    Uncaught SyntaxError: Identifier 'b' has already been declared   
}
```

打开作用域
with
for 带let const
try catch

```
obj = { foo() { return this } }
(obj.foo)() === obj // true
eval('obj.foo')() === obj // false

this指向对后一个调用他的对象
obj.foo // 作为执行表达式， 返回是个引用，指向对象
但eval('obj.foo') // 执行语句 当作语句来执行，指向window
```