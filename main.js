var mygraph = require('./graph');
var heapSort = require('./floyd')
var BinarySearchTree = require('./tree.js')
var mystack = require('./stack')
var mypriorityqueue = require('./priorityQueue')
var circleQueue = require('./circleQueue')
var queue = require('./queue')
var linkedList = require('./linkedList')
var doubleLinkedlist = require('./doubleLinkedList')



var _doubleLinkedlist = new doubleLinkedlist()
var _linkedList = new linkedList();
var _queue = new queue();
var _circleQueue = new circleQueue()
var _mypriorityqueue = new mypriorityqueue();
var _myBinarytree = new  BinarySearchTree();
var _mygraph =  new mygraph();
var _mystack = new mystack()
_mygraph.init(6);
_mygraph.addEdge(1,0);
_mygraph.addEdge(1,2);
_mygraph.addEdge(2,7);
_mygraph.hasPathTo(1);
_mygraph.test();
_mygraph.show();

console.log("myBinarytree对象:", _myBinarytree);

  _myBinarytree.insert(4);
 _myBinarytree.insert(5); 
 _myBinarytree.insert(6);

console.log("中序遍历:",_myBinarytree.inOrder());
// node1.right = node3;
// node1.left = node2;
// _myBinarytree.preorder(node1);

console.log("测试堆排序:");
let flod_arr = [3,5,2,54,54,523,34,78];
heapSort(flod_arr);
console.log(flod_arr);


console.log('========测试栈=======');
_mystack.insert(1);
_mystack.insert(4);
_mystack.insert(8);
_mystack.show();
_mystack.pop();
_mystack.show();

console.log("========测试优先级队列=======")
_mypriorityqueue.enqueue(12,1);
_mypriorityqueue.enqueue(1,3);
_mypriorityqueue.enqueue(2,2);
_mypriorityqueue.enqueue(4,4);
_mypriorityqueue.show();


console.log("============测试队列和循环队列============")
_queue.enqueue(12);
_queue.enqueue(2);
_queue.enqueue(4);
_queue.enqueue(67);
_queue.show();
_circleQueue.enqueue(12);
_circleQueue.enqueue(23);
console.log(_circleQueue.getIndex(1));

console.log("===========测试链表========");
_linkedList.insert(0,123);
_linkedList.insert(1,34);
_linkedList.insert(2,36);
_linkedList.removeat(1);
_linkedList.size();


console.log("============测试双向链表===========");
_doubleLinkedlist.insert(0,12);
_doubleLinkedlist.insert(1,23);
_doubleLinkedlist.insert(2,34);
_doubleLinkedlist.size()

