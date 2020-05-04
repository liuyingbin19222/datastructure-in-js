var mygraph = require('./graph');
var heapSort = require('./floyd')
var BinarySearchTree = require('./tree.js')
var mystack = require('./stack')

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

