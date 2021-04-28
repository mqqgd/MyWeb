/* 问题：
    在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。

    Input:{2, 3, 1, 0, 2, 5}
    Output:2

*/

//解法1
// 时间复杂度: O(N) 空间复杂度: O(1)  ==> 不能使用排序，不能使用额外的辅助空间
// function findRepeatNumber(arr) {
//     let len = arr.length;

//     // 遍历
//     for (let i = 0; i < len; i++) {
//         while (arr[i] != i) {
//             if (arr[i] == arr[arr[i]]) {
//                 // 说明i与num[i]位置的元素相同，返回重复元素
//                 let rep = arr[i];
//                 return rep;
//             }
//             swap(arr, i, arr[i]);
//         }
//         // swap(arr, i, arr[i]);
//     }

//     function swap(arr, a, b) {
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
//     }

//     // 元素不在0~n-1,返回-1
//     return -1;
// }

//解法2  哈希方法
var findRepeatNumber = function(nums) {
    //key 为具体的数字  value为数字个数
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num] += obj[num];
            return num;
        }
    }
};


// test
let arr = [3, 3, 1, 0, 2, 5, 3];

// let result = findRepeatNumber(arr);
console.log(findRepeatNumber(arr));