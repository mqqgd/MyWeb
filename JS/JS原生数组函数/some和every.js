// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
// 它返回的是一个Boolean类型的值,

// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。
// 它返回一个布尔值。 注意：若收到一个空数组，此方法在一切情况下都会返回 true。

// some将会给数组里的每一个元素执行一遍回调函数，直到回调函数返回true。
// 如果找到目标元素，some立即返回true，否则some返回false。

// 回调函数只对已经指定值的数组索引执行；它不会对已删除的或未指定值的元素调用。

// arr.some(callback(element[, index[, array]])[, thisArg])


//测试元素的值v1  some
function isGreatThan10(value, index, array) {
    return value > 10;
}
[2, 3, 5, 7, 8].some(isGreatThan10); //false
console.log([12, 5, 8, 1, 4].some(isGreatThan10)); //true


//测试元素的值v1  every
function isGreatThan10(value, index, array) { //检测所有元素是否都大于10
    return value > 10;
}
[12, 3, 5, 7, 8].every(isGreatThan10); //false
console.log([12, 15, 18, 11, 14].every(isGreatThan10)); //true




//测试元素的值v2  ==  v1
[2, 3, 5, 7, 8].some(x => x > 10); //false  
[2, 3, 5, 7, 18].every(x => x > 10); //false  


// arrow function
// x => x>10
// ||
// function (x){
//     return x>10;
// }