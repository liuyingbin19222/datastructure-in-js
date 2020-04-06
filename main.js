var mygraph = require('./graph')
var mytree = require('./tree')
var _mytree = new mytree();
var _mygraph =  new mygraph();

_mygraph.init(6);
_mygraph.addEdge(1,0);
_mygraph.addEdge(1,2);
_mygraph.addEdge(2,7);
_mygraph.hasPathTo(1);
_mygraph.test();
_mygraph.show();

console.log("mytree对象:", _mytree);

var node1 =  _mytree.init(4);
var node2 = _mytree.init(5);
var node3 = _mytree.init(6);

console.log(node1);
// node1.right = node3;
// node1.left = node2;
// _mytree.preorder(node1);


