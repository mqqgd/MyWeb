// forEach() 方法对数组的每个元素执行一次给定的函数。

// .forEach(回调函数，thisArg)
// forEach() 方法按升序为数组中含有效值的每一项执行一次 callback 函数，
// 那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。

// forEach 不会直接改变调用它的对象，但是那个对象可能会被 callback 函数改变。


// ['_', 't', 'a', 'n', 'i', 'f', ']'].forEach(function(value, index, array) {
//     this.push(String.fromCharCode(value.charCodeAt() + index + 2))
// }, out = [])
// // 因为 thisArg 参数（out = []）传给了 forEach()，每次调用时，它都被传给 callback 函数，作为它的 this 值
// out.join('')
// console.log(out)

// for循环-->forEach
const items = ['item1', 'item2', 'item3'];
const copy = [];

// for
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}
// forEach 
items.forEach(function(item) {
    copy.push(item);
});


//数组在迭代时被修改了，则其他元素会被跳过
var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
        words.shift(); //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
    }
});