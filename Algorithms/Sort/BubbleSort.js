/* 思想：两两比较，两两交换，每轮排出一个最大的数，在右端 */

function BubbleSort(arr) {

    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minpos = i;
        for (let j = i + 1; j < len; j++) {
            minpos = (arr[j] > arr[minpos]) ? minpos : j;
        }
        swap(arr, minpos, i);
    }

    console.log(arr);
    return arr;

}

// let arr = [2, 4, 1, 6, 9, 3, 6];
// BubbleSort(arr);