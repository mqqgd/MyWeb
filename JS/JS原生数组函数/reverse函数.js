//reverse将数组中的元素倒排，并返回
// 会改变原数组


// 颠倒数组中的元素
var a = [1, 2, 5, 8, 9];
a.reverse();
console.log(a.reverse())


// 颠倒类数组中的元素
const b = { 0: 1, 1: 2, 2: 3, length: 3 }; //length不能省略，如果省略就不倒置，没有length属性,所以就不是类数组
Array.prototype.reverse.call(b); //直接b.reverse()报错b.reverse is not a function
console.log(b); //{ '0': 3, '1': 2, '2': 1, length: 3 }
//若length:2
// 则结果为：{ '0': 2, '1': 1, '2': 3, length: 2 }