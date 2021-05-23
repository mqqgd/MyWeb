function mergeArr(A, B) {
    let help = [];
    let i = 0,
        j = 0,
        k = 0;
    while (i < A.length && j < B.length) {
        help[k++] = (A[i] <= B[j]) ? A[i++] : B[j++];
    }
    while (i < A.length) {
        help[k++] = A[i++];
    }
    while (j < B.length) {
        help[k++] = B[j++];
    }
    return help;
}
let A = [];
let B = [1];
let res = mergeArr(A, B)
console.log(res);