# 网络基础

一、浏览器和服务器

浏览器的作用：将网页渲染出来给用户查看；让用户通过浏览器和网页交互







# HTML

## 绪论

#### HTML

Hyper Text Markup Language 超文本标记语言

.html本质：纯文本文件   

HTML是用来给文本添加语义的，不是用来修改文本的样式的（eg: <h1>标签的作用：告诉浏览器哪些文字是标题）

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210403165928228.png" alt="image-20210403165928228" style="zoom:67%;" />

HTML4.01不够严谨，所以有了XHTML1.0

#### HTML语法规范

HTML标签是由尖括号包围的关键词，通常是成对出现，也有单标签

双标签关系分为：包含关系（父子）    并列关系（兄弟）



>  基本结构标签（骨架标签）：  

```
<!DOCTYPE html>   //文档类型声明   作用：告诉浏览器使用哪种HTML版本显示网页
<html lang="en">       //  html标签:页面最大的标签，根标签
<head>       //文档头部  head中必须设置title
    <meta charset="UTF-8">    //charset属性定义文档使用的字符编码    必写
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>    //文档标题
</head>
<body>                     //文档主体：文档所有内容
    
</body>
</html>
```

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210329154523694.png" alt="image-20210329154523694" style="zoom: 67%;" />

​	HTML后缀名：. html   或 . html

​	浏览器的作用：读取HTML文档，并以网页的形式显示

​	lang  //定义当前文档显示的语言   en (英)、zh-CN(中)

​	字符集 ：多个字符的集合，用以计算机识别和存储各种文字。



⭐ 注意：<!DOCTYPE>不是HTML标签，是文档类型声明标签

------



#### 开发工具

**VS code**

!  或者 ！+tab     生成页面骨架

Ctrl + N   新建文件

常用插件：

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210329160028576.png" alt="image-20210329160028576"  />



---



## 基础标签

|                      | 标签                                                         | 标签语义                   | 特点                                                         |
| -------------------- | :----------------------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| 标题标签   （双）    | <h1>---<h6>                                                  | 标题                       | 文字加粗一行显，从大到小依次减                               |
| 段落标签（双）       | <p>...</p>                                                   | 将HTML文档分割成若干段落   | 根据浏览器窗口大小自动换行；段落之间有空隙                   |
| 换行标签（单）       | <br/>                                                        | 强制换行                   | 开始新的一行，段落间无间隙                                   |
| 文本格式化标签（双） | 加粗：<strong> 或者<b>  ,  斜体：<em>或者<i>  删除线：<del>或者<s>  ,下划线：<ins>或者<u> | 加粗、斜体、删除线、下划线 | 突出重要性；加粗、斜体、下划线                               |
| 特殊标签（双）       | <div> 装内容的盒子</div>                            <span></span> | 无                         | 布局页面的；<div>一行只能放一个，大盒子；<span>一行可以多个，小盒子 |
| 图像标签（单）       | <img  src="图片路径" alt = "替换文本"  title = "提示文本" width = "设定宽度" height = "高度像素" border = "边框粗细" /> |                            | 属性之间不分先后；空格分开；属性采取键值对的格式             |
| ★★★超链接标签（双）  | <a href= "跳转目标" target = "目标窗口的弹出方式“>文本或图像</a> |                            | 单词anchor的缩写，”锚“                                       |

⭐ img标签 注意点：

- img 的属性alt：图像不显示的时候用文字替换；
- title属性：鼠标放到图片上，提示文字；
- border：一般只设定宽度或者高度，另外一个边会等比例缩放

⭐ 超链接标签 注意点：

- href属性：指定链接目标的url     （不可省略）
- target属性：指定链接页面的打开方式，_self：默认在当前页面打开，  _blank：在新窗口打开
- 外部链接必须有：http://

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210329183425276.png" alt="image-20210329183425276" style="zoom: 67%;" />

**路径：**

- 相对路径

- 绝对路径  （从盘符开始）

  ----

  

#### 注释和特殊字符

**注释**   ctrl+/

HTML： <!--注释语句 -->  

CSS: /* 注释语句*/

JS：//单行注释     /* 多行注释*/



**特殊字符**’

<img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210329183602542.png" alt="image-20210329183602542" style="zoom: 80%;" />

记住前三个

---



## 表格标签

#### 表格标签

表格不是用来布局页面的，而是用来展示数据的。

1、基本语法：

> < table>                 //定义表格标签
>     <tr>                           //  行    必须嵌套在<table></table>标签中
>         <td>即，table data，单元格内的文字</td>       //单元格   必须嵌套在<tr></tr>中
>     </tr>
> </table>
>
> 

⭐ 注意：表格是没有列的概念，有单元格，表格是嵌套关系（行可以嵌套多个单元格）



2、表头单元格  <th>

列的标题，位于表格的第一行或第一列，**加粗居中显示**



3、表格结构标签

<thead></thead>: 定义表格的头部，内部必须有<tr>标签，一般位于第一行

<tbody></tbody>： 表格主体，放数据

<tfoot></tfoot>:   表格的附加信息 

注意：这三个标签都放在<table></table>中，<thead>、<tfoot>有自己默认的高度

 

4、表格标签

<caption></caption> : 定义表格标hui题，会自动相对于表格的宽度居中

要写在<table>标签之后



#### 表格属性    

注意：要写到<table>里面（行内)去

| 属性名      | 属性值              | 描述                                  |
| ----------- | ------------------- | ------------------------------------- |
| align       | left、center、right | 对齐方式                              |
| border      | 1或者               |                                       |
| cellpadding | 像素值              | 内部文字与单元格之间的空白，默认1像素 |
| cellspacing | 像素值              | 单元格之间的空白，默认2像素           |
| width       | 像素值 or  百分比   | 表格宽度                              |

实际开发时，通过CSS来设置



#### 合并单元格

跨行合并：rowspan = “合并单元格的个数”     ---->目标单元格选：上侧的单元格

跨列合并：colspan = “合并单元格的个数”       ----->目标单元格选：左侧的单元格

合并三部曲：

- 先确定是跨行还是跨列合并

- 找到目标单元格，写上合并方式 = 合并的单元格数量

- 删除多余的单元格

  <img src="C:\Users\malan\AppData\Roaming\Typora\typora-user-images\image-20210330132946621.png" alt="image-20210330132946621" style="zoom: 67%;" />

---



## 列表标签

用来布局的

#### 无序标签★★    <ul>

> < ul>                                    //只能嵌套<li></li>
>     <li>列表项1</li>      //<li>是个容器，可以容纳所有元素
>     <li>列表项2</li>
> </ul>

各列表项无顺序级别之分，是并列的



#### 有序列表    <ol>

< ol>                                    //定义有序列表，只能嵌套<li></li>
    <li>列表项1</li>        //<li>是个容器，可以容纳所有元素
    <li>列表项2</li>
</ol>



#### 自定义列表★★   <dl>     “帮派”

> < dl>                              //   <dl>定义描述列表，只能包<dt>和<dd>
>     <dt>名词1</dt>                         //<dt>定义项目/名字
>     <dd>名词1解释1</dd>                  //<dd> 描述每一个项目/名字
>     <dd>名词1解释2</dd>
> </dl>

<dt>和<dd>无个数限制，一个<dt>对应多个<dd>

---



## 表单标签（注册页面）

一个完整的表单由 表单域、表单控件（表单元素）、提示信息组成。

#### 表单域    <form>

*< form> 会把它范围内的表单元素信息提交给服务器*，实现用户信息的收集和传递。

>< form action = "url地址"  method = “提交方式"  name = "表单域名称">
>
>  各种表单元素控件
>
></form>

| 常用属性 | 属性值   | 作用                                           |
| -------- | -------- | ---------------------------------------------- |
| action   | url地址  | 指定接收并处理表单数据的服务器程序的url地址    |
| method   | get/post | 设置表单数据提交的方式                         |
| name     | 名称     | 指定表单的名称，以区分同一个页面中的多个表单域 |

---



#### 表单控件（表单元素）

- <input> 输入表单元素

- < select>下拉表单元素

- < textarea> 文本域元素

  

1. **<input>表单元素**★★ 

**type 属性**

| 属性值   | 描述                             |
| -------- | -------------------------------- |
| button   | 定义可点击按钮  （和JS搭配使用） |
| checkbox | 复选框                           |
| file     | 输入字段和“浏览”按钮，上传文件   |
| hidden   | 隐藏的输入字段                   |
| image    | 图像形式的提交按钮               |
| password | 密码字段（被掩码）               |
| radio    | 单选按钮                         |
| reset    | 重置按钮，清除所有数据           |
| submit   | 提交按钮，将表单数据发送到服务器 |
| text     | 单行，输入文本，默认20个字符     |

⭐ **注意：设置相同的name，可以实现单选按钮、复选框的多选功能。**

**其他常用属性**

| 属性      | 属性值     | 描述                                                         |
| --------- | ---------- | ------------------------------------------------------------ |
| name      | 用户自定义 | 定义input元素的名称，**区分不同表单**   后台人员使用         |
| value     | 自定义     | input元素的值       后台人员使用                             |
| checked   | checked    | 规定此input元素首次加载时应当被选中**（用于单选按钮、复选框）** |
| maxlength | 正整数     | 规定输入字段中字符的最大长度                                 |

Q ：有些表单元素刚打开页面就默认显示几个文字？

​     可设置value属性=“值"



2. **< select>定义下拉列表**       节约页面空间

> < select>                               //至少包含一对<option>
>     <option>选项</option>          //<option>中定义selected = "selected",当前项即为默认选中项
> </select>



3. **< textarea> 文本域元素**  （多行文本输入）

>< textarea  row = "3" cols = "20">
>    文本内容
></textarea>     //实际开发中，都是用CSS改变大小



4. **补充**

<label>标签    ----常与表单标签搭配使用

为input元素定义标注（标签）

<label>用于绑定一个表单元素，当点击<label>标签内的文本时，浏览器就会自动**将光标转到或选择对应的表单元素上，增加用户体验。**

><label for = "sex">男</label>     //for属性要与相关元素的id属性相同
>
><input type = "radio"  name = "sex"  id = "sex" /> 



< datalist> : 待选项  仅了解，兼容性严重



## HTML5新增标签

#### video标签

```
格式1： <video src = "url"> </video>

格式2： //兼容性，解决浏览器适配问题    前提：浏览器必须支持HTML5标签
<video> 
	<source src = '' type = ''></source>   //type里边是视频的格式：ogg、mp4、webm
	<source src = '' type = ''></source>
</video>
```

JS的html5media框架可以让所有浏览器支持video标签来播放视频。

> video标签属性

```
src :  视频地址
autoplay : 是否自动播放视频
controls : 显示控制条
poster:  视频没播放之前显示的占位图片
loop :  循环播放    一般用于广告
preload: 预加载视频  注意：与autoplay相克
muted: 静音
width/height: 与img标签一样，设置其中一个，另一个等比例
```

#### audio 标签

格式同video标签，属性也基本一样（除了height/width、poster不能用）

#### 详情、概要标签

```
<details>
	<summary>概要信息</summary>
	详情信息
</details>
```



#### ⭐ 不是H5的标签  ---marquee

跑马灯效果

> 属性：
>
> direction :   设置滚动方向    left/ right / up / down
>
> scrollamount :  设置滚动属性，值越大越快
>
> loop :  设置滚动次数 ，默认是-1，即，无限滚动
>
> behavior :  设置滚动类型   slide滚动到边界就停止，alternate滚动到边界就弹回



#### 字符实体 

&nbsp //空格

&lt       //小于             &gt    //大于

&copy     //版权符号



# CSS

## CSS（CSS样式表、级联样式表）

## 基础选择器

| 基础选择器   | 针对                     | 关键词                | 用法                                              |
| ------------ | ------------------------ | --------------------- | ------------------------------------------------- |
| 标签选择器   | 同一类标签               | 标签                  | 标签 { 属性:  属性值 }                            |
| 类选择器     | 一个或多个标签           | 样式（·）结构（class) | . red{ color : red;}   <div  class = 'red'></div> |
| id选择器     | 标有特点id的元素（一个） | 样式（#） 结构（id)   | # id名{ 属性：值}   <div  id = 'id名'></div>      |
| 通配符选择器 | 所有元素                 | *                     | *{ 属性：值  }                                    |









































