# javascript 继承

## 类式继承（原型继承）

```
function A () {}
function B () {}
B.prototype = new A()
```
**优缺点**
由于指向A的实例， 那么可以访问父类新增原型方法/属性
但不能多继承

## 构造函数继承
```
function A(){}
function B(){
  A.call(this);
}
```
**优缺点**
可以实现多继承
但不能访问父类原型方法和属性

## 组合式继承

```
function B(){}
function A(){}
B.prototype = new A();

function B(){
  A.call(this);
}
```

可以继承实例属性/方法，也可以继承原型属性/方法，
但是执行了两个A的构造函数

## 寄生组合式继承
```
// 寄生组合式继承的核心方法
function inherit(child, parent) {
    // 继承父类的原型
    const p = Object.create(parent.prototype)
    // 重写子类的原型
    child.prototype = p
    // 重写被污染的子类的constructor
    p.constructor = child
}

// GithubUser, 父类
function GithubUser(username, password) {
    let _password = password 
    this.username = username 
}

GithubUser.prototype.login = function () {
    console.log(this.username + '要登录Github，密码是' + _password)
}

// GithubUser, 子类
function JuejinUser(username, password) {
    GithubUser.call(this, username, password) // 继承属性
    this.articles = 3 // 文章数量
}

// 实现原型上的方法
inherit(JuejinUser, GithubUser)

// 在原型上添加新方法
JuejinUser.prototype.readArticle = function () {
    console.log('Read article')
}

const juejinUser1 = new JuejinUser('ulivz', 'xxx')
console.log(juejinUser1)

```

[深入JavaScript继承原理](https://juejin.im/post/5a96d78ef265da4e9311b4d8#heading-8)