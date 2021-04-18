/* 思想：相邻两两比较，两两交换，较大的放后面，每轮排出一个最大的数，在右端 */

function BubbleSort(arr) {

    let len = arr.length;
    if (!arr || len < 2) {
        return;
    }

    for (let i = len - 1; i > 0; i--) {

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
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

let arr = [2, 4, 1, 6, 9, 3, 6];
BubbleSort(arr);