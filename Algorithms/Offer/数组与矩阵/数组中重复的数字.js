/* 问题：
    在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。

    Input:{2, 3, 1, 0, 2, 5}
    Output:2

*/

//解法1
// 时间复杂度: O(N) 空间复杂度: O(1)

function findRepeatNumber(arr) {
    let len = arr.length

    // let count = 0;
    for (let i = 0; i < len; i++) {
        while (arr[i] != i) {
            if (arr[i] == arr[arr[i]]) {
                let rep = arr[i];
                return rep;
            }
            swap(arr, i, arr[i]);
        }
        // swap(arr, i, arr[i]);
    }

    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }


    return -1;
}

let arr = [2, 5, 7, 2, 1, 7, 3];
let result = findRepeatNumber(arr);

//解法2
var findRepeatNumber = function(nums) {
    //key 为具体的数字  value为数字个数
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num] += obj[num]
            return num
        }
    }
};