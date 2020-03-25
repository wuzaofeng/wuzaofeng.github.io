## 1. 请写出你知道的http状态码以及含义

## 2. 假如移动端设备的尺寸是640px， 要实现1rem = 16px，需要怎么实现

## 3. 请使用css画出一个梯形

## 4. 实现一个三栏布局，中间部分要自适应宽度并且优先加载，左边宽100px右边宽为160px

## 5.请写出下面三次alert的结果

```
<script>
var a = 3
function change1 (a) {
    a = 4
}
change1(a)
alert(a)

var user = {age: 30}
function change2 (user) {
    user.age = 40
}
change2(user)
alert(user.age)

change2(user)
alert(user.age)

function change3 (user) {
    user = {age: 50}
}
change3(user)
alert(user.age)

</script>
```

## 6.右侧写出浏览器console执行完左侧代码以后的alert()内容， 提示接下来三行代码都会弹出三次弹窗
```
function test(a, b) {
    alert(b)
    return {
        test: function (c, a) {
            return test(c, a)
        }
    }
}

code 
1. var a = test(100, 200); a.test(300); a.test(400)
2. var b = test(101); test(201) test(401)
3. var c = test(102); test(202, 302) c.test()
```

## 7.设置a的值让条件 a==5&& a==8成立

## 8.以vue或react或者angular为例， 画出组件生命周期

## 9, 不使用for或者while， 创建一个长度为120的数组，并且每个元素的值等于数组长度减去它的下标

## 10.有以下数据结构，需要一段代码转化成树形结构