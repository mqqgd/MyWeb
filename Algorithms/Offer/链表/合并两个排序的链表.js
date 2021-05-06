function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 非递归
function MergeList(l1, l2) {
    let mergeHead = new ListNode();
    let cur = mergeHead;
    while (l1 !== undefined && l2 !== undefined) {
        // 注意写成 l1 !== null 会报错
        // console.log(l1.val)
        // console.log(l2.val)
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) {
        cur.next = l1;
    }
    if (l2) {
        cur.next = l2;
    }

    return mergeHead.next;
}

let list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
        }
    }
}

let list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,

        }
    }
}



let res = MergeList(list1, list2);
console.log(res);