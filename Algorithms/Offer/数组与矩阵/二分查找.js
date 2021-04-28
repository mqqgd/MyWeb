/**
 * 题目描述
 * 请实现无重复数字的升序数组的二分查找
 * 给定一个 元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
 * 
 * 输入：[-1,0,3,4,6,10,13,14],13
 * 输出：6
 */
function search(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    //这里用if的话，结果不对
    // while是当条件满足时进行循环；而if 是当条件满足时执行一次。
    while (left <= right) {
        // 中点 >> 除法
        let mid = left + ((right - left) >> 1);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;

        }
    }
    return -1;

}

let nums = [-1, 0, 3, 4, 6, 10, 13, 14];
let res = search(nums, 13);
console.log(res);