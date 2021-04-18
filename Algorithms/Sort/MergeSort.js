/* 思想：
    两个排好序的数组，放到一个辅助数组里边，然后拷回给原数组。 
    先分成两半，左边排序，右边排序，最后合并左右两边

*/

//v1 
function MergeSort(arr) {
    let len = arr.length;
    let mid = len / 2;
    let temparr = [len];

    let i = 0;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= len) {
        temparr[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
        console.log(temparr)

    }
    while (i <= mid) temparr[k++] = arr[i++];
    while (j <= len) temparr[k++] = arr[j++];

    for (let x = 0; x < temparr.length; x++) {
        arr[i + x] = temparr[x];
    }

    console.log(arr);
    return arr;

}

// let arr = [2, 4, 6, 1, 7, 3, 8, 2];
let arr = [3, 5, 1, 2, 4, 6];
MergeSort(arr);


// function MergeSort(arr) {

//     function Partition(arr, left, right) {

//     }



// }