/* 思想：
    选择最小的元素，和第一个元素交换位置，
    再从剩下的数组中选出最小的元素，和第二个元素交换位置，
    重复这个步骤，直到排好序 
    比较次数：N^2/2     交换次数：N     运行时间与时间无关
*/

function SelectionSort(arr) {
    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }


    for (let i = 0; i < arr.length - 1; i++) {
        let minpos = i;
        for (let j = i + 1; j < arr.length; j++) {
            minpos = (arr[minpos] > arr[j]) ? j : minpos;
        }
        // console.log(minpos);

        swap(arr, minpos, i);

    }
    console.log(arr);
    return arr;
}

//sample test
// let arr = [2, 4, 6, 1, 3, 8, 5];
// SelectionSort(arr);

// create random array 
function RandomArr() {
    let numArr = [];
    let len = 1000;
    for (let i = 0; i < len; i++) {
        numArr.push(Math.floor((Math.random() * len) + 1));
    }
    console.log("随机数组：", numArr)
    return numArr;
}

//DataChecker
// function testSort() {
let randomarr = RandomArr();
let res = SelectionSort(randomarr);
randomarr.sort();
let tag = true;

for (let i = 0; i < randomarr.length; i++) {
    let tag = (res[i] !== randomarr[i]) ? false : true;
}
console.log(tag);
// }

// testSort();