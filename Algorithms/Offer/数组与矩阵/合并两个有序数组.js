// function mergeArr(A, B) {
//     let help = [];
//     let i = 0,
//         j = 0,
//         k = 0;
//     while (i < A.length && j < B.length) {
//         help[k++] = (A[i] <= B[j]) ? A[i++] : B[j++];
//     }
//     while (i < A.length) {
//         help[k++] = A[i++];
//     }
//     while (j < B.length) {
//         help[k++] = B[j++];
//     }
//     return help;
// }
// let A = [];
// let B = [1];
// let res = mergeArr(A, B)
// console.log(res);


var merge = function(nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;



};