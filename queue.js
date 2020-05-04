class queue{
    constructor(){
        this.datalist = [];
    }
    enqueue(value){
        this.datalist.push(value);
    }
    dequeue(){
        this.datalist.shift();
    }
    front(){
        return this.datalist[0];
    }
    show(){
        if(this.datalist.length != 0){
            return this.datalist;
        }else {
            console.log("队列为空");
        }
    }
    clear(){
        this.datalist = [];
    }
    getSize(){
        return this.datalist.length;
    }
    isEmpty(){
        return !this.datalist.length;
    }
}