/* 插入排序思想：
    将当前元素与前面的数作比较，如果小，就往前插。
    即，每次将当前元素插入到左侧已排好序的数组中，插入后保持有序。
*/
function InsertionSort(arr) {

    let len = arr.length

    for (let i = 0; i < len; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1);

        }
    }

    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    console.log(arr);
    return arr;
}

// arr = [2, 4, 7, 1, 3, 9, 0];
// InsertionSort(arr);

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
let res = InsertionSort(randomarr);
randomarr.sort();
let tag = true;

for (let i = 0; i < randomarr.length; i++) {
    let tag = (res[i] !== randomarr[i]) ? false : true;
}
console.log(tag);