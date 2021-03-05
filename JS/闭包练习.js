// function test() {
//     var tempt = 100;
//     function a() {
//         console.log(tempt)
//     }
//     return a;
// }

// var demo = test();
// demo();


// function a() {
//     function b() {
//         var bbb = 233;
//         document.write(aaa);
//     }

//     var aaa = 123;
//     return b;
// }
// var glob = 100;
// var demo = a();
// demo();    //demo执行b执行，demo其实就是b


// //闭包
// function test() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         arr[i] = function () {
//             console.log(i);

//         }
//     }
//     return arr;
// }

// //外部执行
// var myArr = test();

// for (var j = 0; j < 10; j++) {
//     myArr[j]();  //会打出10个10
// }



