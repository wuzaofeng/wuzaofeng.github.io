# 什么是表达式语句？

::: tip 前言
它是由运算符连接变量或者直接量构成的
要么是函数调用，要么是赋值，要么是自增、自减，否则表达式计算的结果没有任何意义
:::

## 赋值表达式左边部分

### PrimaryExpression 主要表达式

* 包含了各种“直接量”

```js
"abc";
123;
null;
true;
false;
```

* 定义对象，针对函数、类、数组、正则表达式等特殊对象类型

```js
({});
(function(){});
(class{ });
[];
/abc/g;
```

* this 或者变量，在语法上，把变量称作“标识符引用”

```js
this;
myVar;
```

### MemberExpression 成员表达式

通常是用于访问对象成员

```js
a.b;
a["b"];
new.target; // 用于判断函数是否是被 new 调用
super.b; // 用于访问父类的属性的语法
```

### NewExpression NEW 表达式

```js
new new Cls(1);
// 等价于
new (new Cls(1));
```

```js
class Cls{
  constructor(n){
    console.log("cls", n);
    return class {
      constructor(n) {
        console.log("returned", n);
      }
    }
  }
}

new (new Cls(1));
```

```js
// 结果输出：
cls 1
returned undefined
```

### CallExpression 函数调用表达式

它的基本形式是 Member Expression 后加一个括号里的参数列表

```js
a.b(c);
super();
```

```js
a.b(c)(d)(e);
a.b(c)[3];
a.b(c).d;
a.b(c)`xyz`;
```

### LeftHandSideExpression 左值表达式

```js
a() = b;
a().c = b;
```

### AssignmentExpression 赋值表达式

```js
a = b

a = b = c = d
// 等价于
a = (b = (c = d))
```

```js
a += b;
// 等价于
a = a + b;

类似的
*=、/=、%=、+=、-=、<<=、>>=、>>>=、&=、^=、|=、**=
```

### 逗号分隔的表达式

```js
a = b, b = 1, null;
```

## 赋值表达式右边部分

### 更新表达式 UpdateExpression

```js
-- a;
++ a;
a --
a ++
```

### 一元运算表达式 UnaryExpression

```js
delete a.b;
void a;
typeof a;
- a;
~ a;
! a;
await a;
```

### 乘方表达式 ExponentiationExpression

```js
++i ** 30
2 ** 30 //正确
-2 ** 30 //报错

4 ** 3 ** 2
相当于
4 ** (3 ** 2)
```

### 乘法表达式 MultiplicativeExpression

乘法表达式分别表示乘、除和取余

```js
x * 2;
*/%
```

### 加法表达式 AdditiveExpression

加法表达式有加号和减号两种运算符

```js
+
-
```

### 移位表达式 ShiftExpression

二进制操作整数并不能提高性能, 仅仅是照顾 C 系语言用户的习惯

```js
<< 向左移位
>> 向右移位
>>> 无符号向右移位
```

### 关系表达式 RelationalExpression

```js
<=
>=
<
>
instanceof
in
```

需要注意，这里的 <= 和 >= 关系运算，完全是针对数字的，所以 <= 并**不等价于** < 或 ==。例如：

```js
null <= undefined
//false
null == undefined
//true
```

### 相等表达式 EqualityExpression(重点)

```js
== // 设计失误
!=
===
!==
```

#### 类型不同的变量比较时==运算只有三条规则

* undefined 与 null 相等；
* 字符串和 bool 都转为数字再比较；
* 对象转换成 primitive 类型再比较

比如：

```js
false == '0' // true
true == 'true' // false
[] == 0  //true 
[] == false //true
new Boolean('false') == false // false
```

### 位运算表达式

* 按位与表达式 BitwiseANDExpression
* 按位异或表达式 BitwiseANDExpression
* 按位或表达式 BitwiseORExpression。

### 逻辑与表达式和逻辑或表达式

### 条件表达式 ConditionalExpression

### 优先级由高到低

[MDN 参考网址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)