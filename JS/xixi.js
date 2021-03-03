
// 变量提升  函数 var
/* var a = 3;
function a() {
    return 4
}
console.log(a); */
// 变量提升的时候 function 和 var都会提升 function 在var的后面
/* var a ;
function a() {
    return 4
}
a = 3; */
// var malan = "haha";
// function changeName() {
//     console.log(malan);
//     var malan = "xixi";
//     console.log(malan);

// }
// changeName();
// console.log(malan); 
// //
// var malan;
// function changeName (){
//     console.log(malan);
//     var malan = "xixi";
// };
// var malan;  因为这里，嗯嗯
// console.log(malan);
// malan = xixi
// malan = haha
{var maalan = "haha";
function changeName() {   晓得了
    console.log(malan);  //undefined   作用域链
    const malan = "xixi";//    记住了  不报错  因为发生了暂时性死区，不能在声明前调用
}//const let ES6  
changeName();}   
var malan = 55

// var malan;   引用错误布吉岛
// function changeName () {
//     console.log(malan);
//     let malan ="xixi";

// }
// let malan;
// malan=xixi;
// malan=haha;对吗

