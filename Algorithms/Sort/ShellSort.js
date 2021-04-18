/* 改进的插入排序
    思想：设置间隔(h < N/3)，插入排序。间隔大，移动次数少；间隔小，移动距离小；
        缩小间隔继续排。

    时间复杂度：O(N^1.3)
*/

function ShellSort(arr) {

    let len = arr.length;
    let h = 1;

    while (h < len / 3) {
        h = 3 * h + 1; //Knuth 序列
    }
    while (h > 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                swap(arr, j, j - h);
            }
        }
        h = h / 3;
    }


    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    console.log(arr);
    return arr;
}

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
let res = ShellSort(randomarr);
randomarr.sort();
let tag = true;

for (let i = 0; i < randomarr.length; i++) {
    let tag = (res[i] !== randomarr[i]) ? false : true;
}
console.log(tag);