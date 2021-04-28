// 层序遍历v1
//输出直接层序遍历的结果，不需要区分每一层
// function levelTraversal(root) {
//     // var levelTraversal = function(root) {
//     let queueArr = [];
//     let res = [];
//     if (root !== null) {
//         queueArr.push(root);

//         while (queueArr.length) {
//             root = queueArr.shift();
//             res.push(root.val);
//             if (root.left !== null) {
//                 queueArr.push(root.left);
//             }
//             if (root.right !== null) {
//                 queueArr.push(root.right);
//             }
//         }
//     }
//     return res;
// }


// 层序遍历v2
//需要区分每一层
function levelTraversal(root) {
    // var levelTraversal = function(root) {
    let queueArr = [];
    let res = [];
    if (root !== null) {
        queueArr.push(root);

        while (queueArr.length) {
            let temp = []; //辅助数组，区分每层节点
            let len = queueArr.length;
            while (len) {
                root = queueArr.shift();
                if (root.left !== null) {
                    queueArr.push(root.left);
                }
                if (root.right !== null) {
                    queueArr.push(root.right);
                }
                len--;
                temp.push(root.val);
            }
            res.push(temp);
        }

    }
    return res;
}

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

var level = levelTraversal(root);
console.log(level)