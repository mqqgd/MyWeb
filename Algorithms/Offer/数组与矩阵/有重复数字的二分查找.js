/**
*题目描述
*请实现有重复数字的升序数组的二分查找
*给定一个 元素有序的（升序）整型数组 nums 和一个目标值 target  ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1

*输入：[1,1,1,1,1,1]
*输出：0

 * @param {*} arr 已排好的数组
 * @param {*} key 想要查找的值
 * 
 */

/* 如果有重复，需要返回第一个出现的位置，
所以当找到一个索引时，用一个变量记录此时的索引。
然后移动右指针，逼近左侧继续寻找。 */

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = -1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);

        if (target === nums[mid]) {
            res = mid;
            right = mid - 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;

        }
    }
    return res;

}

let nums = [0, 1, 1, 1, 1, 1];
let num = search(nums, 1);
console.log(num)

// 测试成功