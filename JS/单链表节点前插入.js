/*   定义2个类，Node类与LinkedList类，Node为结点数据，LinkedList保存操作链表的方法。
     Node节点数据
    element用来保存结点上的数据，next用来保存指向一下结点的的链接。

    问题：单链表在某个节点前插入一个新元素
*/

function Node(element) {
    this.element = element;

    this.next = null;

}

function LinkedList() {
    this.head = new Node('head');

    this.findPrev = findPrev;

    this.insert = insert;

    this.showLinklist = showLinklist;

}

// findPrev 找到目标节点的前一个节点,遍历条件是curr.next.element == item
function findPrev(item) {
    var currentNode = this.head;
    while (!(currentNode.next == null) && (currentNode.next.element != item)) {
        currentNode = currentNode.next
    }
    return currentNode
}


function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currentPrev = this.findPrev(item);  //当前节点的前一个节点
    newNode.next = currentPrev.next;
    currentPrev.next = newNode;

}

function showLinklist() {
    var currentNode = this.head
    while (currentNode.next) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next
    }
}


var list = new LinkedList();
list.insert("p", "head");   //head , p 
list.insert("a", "p");    //p前插入一个a
list.insert("b", "p");   //p前插入一个b
console.log(list);
console.log(list.showLinklist());
