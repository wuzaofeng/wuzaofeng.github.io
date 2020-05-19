# 前端面试之道的理解

## 总结

### 原始类型, 对象类型

1.number浮点类型的换算问题

2.string类型是不可变的

3.null不是对象，但typeof null输出对象，**历史悠久问题**，为了性能考虑使用的**低位存储变量**的类型信息， 000开头代表对象，null表示全为0

4.typeof判断原始类型，除了null，其他都可以判断，但判断对象，除了函数能判断出来，其他都是object

5.可以通过[Symbol.hasInstance] 让`instanceof`判断原始类型

### 类型转换

1. 除了undefined, null, false, NaN, '', 0, -0, 其他所有值都转成true, 包括对象

2.对象转原始类型，会调用内置`[[ToPrimitive]]`
该算法逻辑，如果已经是原始类型，就不转换，如果是字符串就通过`toString`方法，否则就先用`valueOf`，如果是基础类型就返回，没有的话就再调用`toString`, 如果是对象调用`valueOf`返回对象
