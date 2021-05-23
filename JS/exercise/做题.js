function fun(n, o) {
    console.log(o);  // undefined
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
// var a = fun(0); // un          a === {}  buhui ooen  let a = { 'sex' : 'nan'}  a.sewox  === 'nan'   neng
// a.fun(1);  // 0  
// a.fun(2); // 0
// a.fun(3); // 0
// undefined 0 0 0
// a = {
//     fun: function (m) {    
//         return fun(m, n);  //n 没有被销毁，而是在a的上下文里边  ao里边   后边传进来的实参都是m在变
//     }


var b = fun(0).fun(1).fun(2).fun(3);  //undefined 0 1 2  ?    我感觉这个地方就是第一次分析的那个，0  1  2  酱紫的  我想上厕所。。待会没灯了。。
var c = fun(0).fun(1);  //这个懂
// c.fun(2);
// c.fun(3);