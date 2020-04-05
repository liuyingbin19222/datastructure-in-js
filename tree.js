/**
 * 借鉴leetcode的tree的结构。
 * 类似于[1,null,2,3]:
 * 
 * 输入: [1,null,2,3]  
    1
        \
        2
        /
    3 
    输出: [1,2,3]

 */
class tree {
    init(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.resultVal = [];
    }
    add(data){
        this.val = data;
        this.resultVal.push(this.val);
        return this.resultVal;
    }
    preorder_non(root){ // 非递归版进行树的前序遍历;
        let result = [];
        let stack = [];
        let current = root;
        while(current || stack.length > 0){
            while(current){
                result.push(current.val);
                stack.push(current.left);
                current = current.left;
            }
            current = stack.pop();
            current = current.right;
        }
        return result;
    }
    preorder(root ,array = []){  // 递归实现;
        if(root == null) return null;
        array.push(root.val);
        this.preorder(root.left,array);
        this.preorder(root.right,array);
        return array;
    }   
}