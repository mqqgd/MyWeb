// // 练习1
// function print() {
//     var mary = {
//         name: "mary",
//         printName: function () {
//             console.log(this.name);
//         }

//     }
//     var test1 = { name: "test1" };
//     var test2 = { name: "test2" };
//     var test3 = { name: "test3" };
//     test3.printName = mary.printName;                     //=function(){console.log(this.name);} dongla
//     var printName2 = mary.printName.bind({ name: 123 });
//     mary.printName.call(test1);   //test1     第一个参数是对象，嗯嗯  卡了
//     mary.printName.apply(test2);   //test2
//     mary.printName(); //mary
//     printName2();   // 因为bind没讲，所以没法做   
//     test3.printName();  //test3

// }
// print();

// // prototype Yuanxing   __proto__不懂。。。
// function Peroson() {
//     let a = 'xixi';
//     let age = 24;
// }
// peroson.prototype.age = 18
// let malan = new Peroson()
// malan.__proto__.a = 'haha'// __proto__== person.prototype
// console.log(malan.a);//xixi   .a只有一个xixi。。嗯嗯  我懂了
// console.log(malan.age);  //18,


var a = new Array(1024);
console.log(a);
a[0102] = 3;
console.log(a[102]);   //undefined
console.log(a[66]);  //3

// var b = Array.apply(null, Array(3));
// var c = b.map(item => item + 1);
// console.log(c);

// var b = new Array(3);
// var c = b.forEach(item => item + 1);
// console.log(c)