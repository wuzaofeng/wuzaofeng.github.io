# shell

## 执行方法

```shell
touch 1.sh
vim 1.sh
echo 'hello word'

# 作为可执行程序
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本

# 作为解释器参数
/bin/sh test.sh
/bin/php test.php

```

## 变量设置

```shell

your_name="qinjx"

# 赋值
echo $your_name
echo ${your_name}

# 只读变量
readonly myUrl

# 删除变量
unset variable_name

```

## Shell 传递参数

```shell
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
```

```shell
$ chmod +x test.sh
$ ./test.sh 1 2 3
# Shell 传递参数实例！
# 执行的文件名：./test.sh
# 第一个参数为：1
# 第二个参数为：2
# 第三个参数为：3
```

$# 参数传递个数
$* 参数
