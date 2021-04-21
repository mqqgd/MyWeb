// 前序遍历
function preorderTraversal(root) {
    // var preOrderTraversal = function(root) {
    let stackArr = [];
    let res = [];
    if (root !== null) {
        stackArr.push(root);
        while (stackArr.length) {
            root = stackArr.pop();
            res.push(root.val);
            if (root.right !== null) {
                stackArr.push(root.right);
            }
            if (root.left !== null) {
                stackArr.push(root.left);
            }
        }
    }
    return res;
};

// 中序遍历
// var inorderTraversal = function(root) {
//     let stackArr = [];
//     let res = [];
//     if (root != undefined) {
//         while (stackArr.length != 0 || root != undefined) {
//             if (root != undefined) {
//                 stackArr.push(root);
//                 root = root.left;
//             } else {
//                 root = stackArr.pop();
//                 // console.log(root.val + "");
//                 res.push(root.val);
//                 root = root.right;
//             }

//         }
//     }
//     return res;

// };

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 构建树
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

var pre = preorderTraversal(root);
console.log(pre)