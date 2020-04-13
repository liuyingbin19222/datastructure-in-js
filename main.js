var mygraph = require('./graph');

var BinarySearchTree = require('./tree.js')


var _myBinarytree = new  BinarySearchTree();
var _mygraph =  new mygraph();

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


