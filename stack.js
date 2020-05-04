class stack{
    constructor(){
        this.datalist = []
    }
    insert(value){
        this.datalist.push(value);
        return true;
    }
    pop(){
        if(this.datalist.length!=0){
            this.datalist.pop(); // 数组方法;
            return true;
        }
        return false;
    }
    getLastElement(){
        return this.datalist[this.datalist.length-1];
    }
    isEmpty(){
        return this.datalist.length == 0 ? true:false;
    }
    getSize(){
        return this.datalist.length;
    }
    show(){
        if(this.datalist.length != 0){
                console.log(this.datalist);
            
        }else {
            console.log("栈为空");
        }
    }
}

module.exports = stack;
