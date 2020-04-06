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
resultVal = [];
array = []
class tree {
    init(val){
        this.val = val;
        this.left = null;
        this.right = null;
    
    }
    add(data){
        for(var i = 0; i < this.resultVal.length;i++){
            if(data == this.resultVal[i]){
                console.log("树中已经有该数据");
               return false; 
            }
        }
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
    preorder(root ){  // 递归实现;
        if(root !== null) {
            this.array.push(root.val);
            this.preorder(root.left);
            this.preorder(root.right);
            console.log(array);
        }
        return this.array;
    }   
}

module.exports = tree;
