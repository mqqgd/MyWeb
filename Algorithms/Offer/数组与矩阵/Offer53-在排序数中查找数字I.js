/**
 * 统计一个数字在排序数组中出现的次数。
    思想：使用二分查找，因为数组有序
    1、在一个循环中用nums[mid]和target的大小来判断接下来循环哪边的数组
    2、经过以上的循环，left和right的指针，就指向target了（或者说是在target的附近了）
    3、接着，在target或者right（right==left了），进行与target的比较，然后记录有几个是符合题意的

 */

// 二分法
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);

        if (target <= nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    console.log(left) //此时left已经指向target了
    while (left < nums.length && nums[left++] == target) {
        count++;
    }

    return count;
};


// 暴力解决
// var search = function(nums, target) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) {
//             count++;
//         }
//     }
//     return count;
// }

//test
let nums = [5, 7, 8, 8, 10];
console.log(search(nums, 9));