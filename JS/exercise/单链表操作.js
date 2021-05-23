// 定义2个类，Node类与LinkedList类，Node为结点数据，LinkedList保存操作链表的方法。
// Node节点数据
// element用来保存结点上的数据，next用来保存指向一下结点的的链接。
//https://www.cnblogs.com/dapang521/articles/12598399.html

function Node(element) {
    this.element = element;

    this.next = null;

}

function LinkedList() {
    this.head = new Node('head');

    this.find = find;

    this.findPrev = findPrev;

    this.insert = insert;

    this.remove = remove;

    this.display = display;

    this.show = show;

}

// find()方法，从头结点开始，沿着链表结点一直查找，直到找到与item内容相等的element则返回该结点，没找到则返回空。
// function find(item) {
//     var currentNode = this.head;//从头结点开始

//     while (currentNode.element != item) {
//         currentNode = currentNode.next;

//     }

//     return currentNode;//找到返回结点数据，没找到返回null

// }

// findPrev 找到目标节点的前一个节点 和之前的遍历类似 这里的遍历条件是curr.next.element == item
function findPrev(item) {
    var curr = this.head;
    while (!(curr.next == null) && (curr.next.element != item)) {
        curr = curr.next
    }
    return curr
}


function insert(newElement, item) {
    var newNode = new Node(newElement);
    // var currentNode = this.find(item);     //当前的节点
    var currentPrev = this.findPrev(item);  //当前节点的前一个节点
    newNode.next = currentPrev.next;
    currentPrev.next = newNode;

    // return newNode;
    console.log(newNode);

}

//删除操作：1、创建结点   2、找到目标结点的前结点   3、修改前结点的next指向被删除结点的n后一个结点
function remove(item) {
    var frontNode = this.frontNode(item);
    //console.log(frontNode.element);
    frontNode.next = frontNode.next.next;
}


function display() {
    var currentNode = this.head
    while (currentNode.next) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next
    }
}

// function show() {
//     var currentNode = this.head, result;
//     while (currentNode.next != null) {
//         result += currentNode.next.element;//为了不显示head结点
//         currentNode = currentNode.next;
//     }
// }

var list = new LinkedList();
list.insert("p", "head");   //head , p 
list.insert("a", "p");    //p前插入一个a
// console.log(list);
// console.log(list.show());
console.log(list.display());
// list.remove("b");
// console.log(list.show());