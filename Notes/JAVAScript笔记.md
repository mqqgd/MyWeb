JS笔记+练习

# JAVAScript基础



## 绪论

1. 什么是Javascript?

   脚本语言 （解释型语言）    无需编译，    边解析边执行

   编译型语言                             需编译            程序---->机器语言文件

​    问：为什么JS可以边解析边执行？

​		    因为浏览器里边有个Javascript解析器

<img src="https://upload-images.jianshu.io/upload_images/647982-d3210a42382f4b74.png?imageMogr2/auto-orient/strip|imageView2/2/w/846/format/webp" alt="img" style="zoom: 33%;" />

​                                                                            （浏览器工作原理）

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210316154234592.png" alt="image-20210316154234592" style="zoom:67%;" />

2. Javascript作用

   HTML  ----------------提供网页上显示的内容（结构）

   CSS      ----------------美化网页（样式）

   Javascript  ----------------------------控制网页行为，用户和网页交互

   

3. Javascript的组成

   - ECMAScript（欧洲计算机制造商协会）：脚本语言标准

   - DOM（文本对象模型）: JS操作网页上的元素（标签）的API

     DOM可以把HTML看作是文档树，通过DOM提供的API可以对树上的节点进行操作

   - BOM（浏览器对象模型）:  JS操作浏览器的部分功能的API

     

4. 书写格式（CSS也是）

   - 行内式   （不推荐）：写在标签内部
   - 内嵌式（内联样式）：写在一对head标签中
   - 外链式：写在一个单独的JS文件中再导进来

   ⭐  注意点

   - 内嵌式默认情况下，浏览器从上至下解析网页。HTML页面中出现<script>标签后，就会让页面暂停等待脚本的解析和执行。无论当前脚本是内嵌式还是外链式，页面的下载和渲染都必须停下来等等脚本的执行完成才能继续。
   - 如果将JS代码写到head标签中，并需要通过js代码操作页面上的元素，那么就不能直接书写js代码，否则无效
     - 解决1：必须加上window.onload = function( )  {操作界面元素的JS}
     - window.onload：等到界面上所有的内容都加载完毕再执行{ }中的代码
     - 解决2：可以将JS代码写到body结束标签的前面

   - 外链式导入.js文件，并且需要在.js文件中操作界面上的元素。

     那么，如果是在head标签中导入的，必须在.js文件中加上window.onload；如果是在body结束标签前面导入的，则不用添加。

   - 如果需要在一对script标签中编写JS代码，那么就不能同时通过script标签再导入其他的.js文件，否则书写的JS代码无效。

     

5. JS常见输出方式：

   - 通过弹窗的形式输出

     `alert("hello,world");`

     `confirm("hello,world");`

     `prompt("hello,world");`

     

   - 通过网页内容区域的形式输出

     `document.write();`

   - 通过开发者工具控制台的形式输出

     `console.log();`

     `console.warn();`

     `console.error();`

     

   ⭐ 注意：**JS是严格区分大小写的。**

   如果输出的内容不是数字，那么就必须通过单引号或者双引号括起来

   不加分号的话，浏览器自动添加，会消耗一定性能，并且有可能会添加错误

   

## JS常量和变量

#### 常量

- 整型常量

- 实型常量：小数
- 字符串常量：单引号或双引号括起来的，”abc"   'a'
- 布尔常量: true   false
- 自定义常量（**ES6新增**）  const  常量名称 = 常量取值；

注意：无论单引号或者双引号括起来了多少个字符，在JS中都是字符串常量



#### **变量**

1. 变量的定义：  var  变量名称；

   ⭐ 注意：JS中，定义变量不需要通过数据类型指定变量的类型

​      **即，值决定类型。**

2. JS中变量如果没有初始化，里面存储的是undefined

   

⭐  注意点：

- JS中变量之间是可以互相赋值的

- 若定义了同名的变量，后定义的会覆盖先定义的

- ES6之前，可以先使用变量，再定义。因为会发生预解析（预处理）

  预解析：将当前JS代码中所有<u>变量的定义</u>和<u>函数定义</u>放在所有代码的最前面

```
var num = 123;
预解析：
var num;
console.log(num);    //undefined
num = 123;
```



## 关键字和标识符

#### 关键字

严格区分大小写.

在JS中所有的关键字都是小写的。

|  关键字  |         |            |        |         |
| :------: | ------- | ---------- | ------ | ------- |
|  break   | do      | instanceof | typeof | case    |
|   else   | new     | var        | catch  | finally |
|  while   | default | if         | throw  | delete  |
|    in    | try     | function   | this   | with    |
| debugger | false   | true       | null   |         |

#### 保留字

| 保留字    |         |           |            |
| --------- | ------- | --------- | ---------- |
| class     | enum    | extends   | super      |
| const     | export  | import    | implements |
| let       | private | public    | yield      |
| interface | package | protected | static     |

#### 标识符

程序员在程序中自己起的名称，eg: 变量名、函数名

标识符命名规则：

- 只能由英文字母、数字、下划线、$ 组成。不能以数字开头

- 严格区分大小写

- 不可以使用关键字、保留字

- 变量的命名遵守**驼峰命名法**，首字母小写，第二个单词的首字母大写。

- JS底层保存标识符时实际上采用的时Unicode编码，所以，所有的utf-8中含有的内容都可以作为标识符

  eg:     haha_test     //是合法的标识符



## 数据类型

#### 数据

静态数据：永久性数据，存储在硬盘中

动态数据：程序运行时动态产生的临时数据，存储在内存中（访问速度快）

相互转换：从硬盘加载到内存



#### 数据类型

6种数据类型：

- Number数值
- String字符串
- Boolean布尔                ------前五个：基本数据类型
- Undefined未定义
- Null空值
- Object对象                    ------引用数据类型



**注意：**

⭐ Number注意点

由于内存的限制，ECMAScript并不能保存世界上所有的数值

```
console.log(Number.MAX_VALUE);  // 最大值：1.7976931348623157e+308
console.log(Number.MIN_VALUE);  // 最小值：5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity  无穷大
console.log(typeof -Infinity); // number   无穷小
NaN 非法数字（Not A Number）
```

JS中整数的运算可以保证精确的结果，浮点数的运算可能得到一个不精确的结果。



⭐ Boolean注意点

虽然Boolean 类型的字面值只有两个，但 ECMAScript 中所有类型的值都有与这两个 Boolean 值等价的值

- 任何非零数值都是true, 包括正负无穷大, 只有0和NaN是false

- 任何非空字符串都是true, 只有空字符串是false

- 任何对象都是true, 只有null和undefined是false

  

⭐Null   &   Undefined注意点

（1）undefined是Undefined类型的字面量

- 前者undefined和10, "abc"一样是一个常量

- 后者Undefined和Number,Boolean一样是一个数据类型

- 需要注意的是typeof对没有初始化和没有声明的变量都会返回undefined。
- Undefined类型只有一种值就是undefined

（2）Null类型只有一个值：null

​          `typeof(null)      //Object`

- undefined值实际上是由null值衍生出来的，所以如果比较undefined和null是否相等，会返回true

  ```
  console.log(null == undefined);    //true
  console.log(null === undefined)    //false
  ```

  

#### 查看数据类型

typeof   数据

**typeof操作符会将结果以字符串的形式返回**



#### 数据类型转换

1. **转换为字符串类型**

   - Number类型、Boolean类型 ---------->变量名称 . toString()

   - 变量 or 常量、null 、undefined    --------> String（x)

   - 变量 or 常量    +  “ ”   or  ' '   （原理：同String()函数）

     ⭐ 注意：

     ☆  数值类型的toString()，可携带一个参数，输出对应进制的值。 eg: num.toString(8);   //8进制

     ☆  变量名称 . toString()是对拷贝的数据进行转换，所以不会影响原有数据

     ☆  常量不能直接调用toString方法，因为常量是不能改变的

     ☆   谷歌浏览器中，Number类型是蓝色的，String类型是灰色的

     ☆    String(变量 or 常量)   //因为是根据传入的值重新生成新的值，不是改变原有数据

     

2. **转换为数值类型**

   - Number（变量  or 常量）
   - 正负运算符：+、-   (注： -  会修改数据的正负性)
   - parseInt()    //只提取整数              parseFloat()   //可提取小数



​		（1）String---->Number：

​					☆  若字符串中都是数值，正常转换

​					☆  若字符串为 <u>空串</u> 或者 <u>全是空格的字符串</u>   ----->0

​					☆  若字符串含非数值  ------>NaN

​		（2）Boolean---->Number：

​						true  --->  1           false ---->  0

​		（3）**null---->Number： 0**

​		（4） **undefined---->Number：  NaN**

```
//对于非Number类型的值,会将先转换为Number，然后再运算
var str2 = "123abc";
res = +str2;
console.log(res); // NaN, 所以内部不是调用parseInt, 而是Number()函数
```

⭐ parseInt 注意点

- 从第一位有效数字开始, 直到遇到无效数字

- 如果第一位不是有效数字, 什么都提取不到, 会返回NaN

- 第一个参数是要转换的字符串，第二个参数是要转换的进制

  `parseInt("")  // 0`     

⭐ parseFloat 注意点

- 会解析第一个，遇到第二个，或者非数字结束
- 如果第一位不是有效数字, 什么都提取不到
- <u>不支持第二个参数，只能解析10进制数</u>
- 如果解析的内容里只有整数，解析成整数

对非String使用parseInt()或parseFloat(), 会先将其转换为String然后在操作

```
var str1 = true;
console.log(parseInt(str1));   //相当于parseInt("true")
```



## 运算符

运算符的优先级，结合性：从左往右，先乘除后加减，有括号的选算括号里面的。

#### 算术运算符   + - * / %

- 任何非数值类型的数据会被自动转换成数值类型后，再做加法
- 任何数据+NaN   ----->NaN
- 任何数据+字符串   数据会先转换成字符串后，再运算
- 任何数据 - / * % 字符串，会先把字符串转换成数值类型，再运算
- JavaScript中整数除以整数结果是小数

取余运算注意点：

- m % n = 余数

- 若m > n，正常取余；m < n，结果为m

- n = 0，结果为NaN

- 取余结果的正负性取决于m，不是n

  

#### 赋值运算符   =、/=、*=、%=、+=、-=

赋值运算符的优先级 < 算术运算符

结合性：从右至左

赋值运算符左边只能放变量，不能放常量



#### 关系(比较)运算符 

⭐ 注意点

- **关系运算符都是左结合性**，不能判断区间

- 对于非数值类型的数据，会先转换成数值类型，再进行判断

  ★ **特殊情况：console.log(null == 0);    //false**

- 任何数据和NaN比较------>false

- 若参与比较的都是字符串类型，则不会转换成数值类型比较，而是直接比较Unicode编码

- null、undefined、NaN比较：

  ```
  console.log(null == 0);    //false
  console.log(undefined == 0);  //false
  console.log(null == undefined);  //true
  ```

  可以通过isNaN( )函数判断一个值是否是NaN。

- == 、!=：判断值是否相等，会进行数据类型转换

  ===、!==：判断值和类型是否同时相等，不会进行数据转换

  

#### 逻辑运算符    ！、 &&、||

- 对于非Boolean类型的数据，会先转为Boolean类型，再参与运算

- 逻辑与   &&     ---->**短路：一假为假**

  格式：条件A  &&  条件B

  若A不成立，返回A；若A成立，无论B成立与否，都返回B

- 逻辑或   ||      ---->**短路：一真为真**

  格式： 条件A  || 条件B

  若A成立，返回A；若A不成立，无论B成立与否，都返回B



★ 逗号运算符

在JS中，一般用于简化代码             结合性：左结合性

逗号运算符的结果是最后一个表达式的结果。

利用逗号运算符可以同时定义多个变量，同时给多个变量赋值



★ 三目（条件）运算符

格式：  条件表达式 ？ 结果A： 结果B；



## 流程控制

流程控制：顺序结构、选择结构、循环结构

#### 选择结构

```
if(条件表达式){
	语句块；
}
```

在JS中代码块不可以用于控制变量的作用域

⭐ 注意点

- 对于非Boolean类型的数据，先转换为Boolean类型再判断

- 对于==、===判断，将常量写在前面（避免因粗心发生赋值现象）

- if / else if / else后面的大括号可省略，控制最近的一条语句，else if / else自动与最近的没有被使用的if匹配

- 在JS中，分号也是一条语句（空语句）

  

**switch**

```
switch(条件表达式/常量/变量){
	case 表达式/常量/变量:
		语句1; 
	    break;
	...
	default:
	    语句n+1;
		break;
}
```

⭐ 注意点

- case 判断的是===，不是==

- default不一定要写在最后，也可以省略

- 对区间判断，常用if；对几个固定的值判断，常用switch

  

#### 循环结构

**while**

```
while(条件表达式){
	语句;
}
```

**do while**

```
do{
	语句;
}while(条件);
```

⭐ 注意点

- 和if一样，非Boolean类型的值，会先转为Boolean类型再判断
- 和if 一样，while后只有一条语句，可省略大括号，不能在（）后面写分号；
- 若循环体的代码需要先执行一次，则使用do while循环

**for**

```
for(初始化表达式; 循环条件表达式; 循环后增量表达式){
		语句;
}
```

⭐ 注意点

- for( )里边的表达式可以不写。即for( ; ; )   ===while(1)

- while()   //while循环不能省略条件表达式

  <img src="file://C:/Users/malan/AppData/Roaming/Typora/typora-user-images/image-20210316110727033.png?lastModify=1615964277" alt="image-20210316110727033" style="zoom: 33%;" />



**三大跳转**

- return ---->立即结束所在函数
- break ---->立即跳出所在switch或循环语句，离开作用范围无意义
- continue  ---->立即跳出所在循环语句，离开作用范围无意义



#### 循环嵌套练习题

循环嵌套的规律：外循环控制行数，内循环控制列数

1、在界面中打印倒直角三角形

⭐ 注意点：**尖尖朝下**，只需修改**内循环的初始化表达式**为**外循环初始化表达式的变量**即可。



2、在界面中打印正直角三角形

⭐ 注意点：**尖尖朝上**，只需修改**内循环的条件表达式**为**外循环初始化表达式的变量**即可。





#### 变量作用域

































































































