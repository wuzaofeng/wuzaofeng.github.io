# css选择器

## 分类
* 类型选择器：根据一个元素的标签名来选中元素 `div`

* 全体选择器：与类型选择器类似，选择任意元素

```
@namespace svg url(http://www.w3.org/2000/svg);
@namespace html url(http://www.w3.org/1999/xhtml);
svg|a {
  stroke:blue;
  stroke-width:1;
}

html|a {
  font-size:40px
}
```

* id 选择器：# 后面跟随 id 名 `#id`

* class 选择器：. 后面跟随 class 名 `.class`

* 属性选择器：通过attr=val 获取选择器 `[attr]`, `[attr=val]`, `[attr~=val]`, `[attr|=val]`

* 伪类选择器一系列由 CSS 规定好的选择器，它们以冒号开头，伪类有普通型和函数型。

    - 树结构关系伪类选择器 `:root, :empty, :nth-child, :nth-last-child`

    - 链接与行为伪类选择器 `:link :hover :active :focus`

    - 逻辑伪类选择器 `:not`

## 组合

* `空格`： 后代， 表示选中所符合条件的后代节点(常用)

* `>`: 子代节点（常用）

* `~`: 后继所有节点，表示**选中所有符合条件的后继节点**，后继节点即跟当前节点具有同一个父元素，并出现在它之后的节点，例如“ .a~.b ”表示选中所有具有 class 为 a 的后继中，class 为 b 的节点。

* `+`: 下一个节点，直接后继节点即 nextSlibling。例如 “.a+.b ”表示选中所有具有 class 为 a 的`下一个` class 为 b 的节点

* `||`：选中符合条件的单元格， （用的少）


**伪元素**

* ::first-line (跟 HTML 代码中的换行无关)

* ::first-letter(第一个字母)

* ::before

* ::after

**::first-line 和 ::first-letter 是比较类似的伪元素**，其中一个表示元素的第**一行**，一个表示元素的**第一个字母**

特殊：
```
<div>
  <p id="a">First paragraph</p>
  <p>Second paragraph</p>
</div>
```

```

div>p#a {
    color:green;
}

div::first-line { 
    color:blue; 
}
```

这段代码最终结果第一行是蓝色，因为 p 是块级元素，所以**伪元素出现在块级元素之内**，所以内层的 color 覆盖了外层的 color 属性。**跟优先级没有关系**

[1.png](./1.png)