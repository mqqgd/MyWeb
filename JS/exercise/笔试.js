// var a = new Array(1024);
// console.log(a);
// a[0102] = 3;
// console.log(a[102]);   //undefined
// console.log(a[66]);  //3

// var b = Array.apply(null, Array(3));
// var c = b.map(item => item + 1);
// console.log(c);

// var b = new Array(30);
// var c = b.forEach(item => item + 1);
// console.log(c);


//回调函数
let a = [1, 3, 6, 8, 9]
a.map(function (value, index, array) {
    console.log(value, index, array);
})