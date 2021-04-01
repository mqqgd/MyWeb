// 对数器

function RandomArr() {
    let numArr = [];
    let len = 100;
    for (let i = 0; i < len; i++) {
        numArr.push(Math.floor((Math.random() * len) + 1));
    }
    console.log("随机数组：", numArr)
    return numArr;
}

// function testSort() {
let randomarr = RandomArr();
// let res = SelectionSort(randomarr);
let res = BubbleSort(randomarr);
randomarr.sort();
let tag = true;

for (let i = 0; i < randomarr.length; i++) {
    let tag = (res[i] !== randomarr[i]) ? false : true;
}
console.log(tag);