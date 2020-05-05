/**
 * 循环队列实现，继承队列实现;
 */

class queue{
    constructor(items){
        this.items = items || [];
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        this.items.shift();
    }
    front(){
        return this.items[0];
    }
    show(){
        if(this.items.length != 0){
            return this.items;
        }else {
            console.log("队列为空");
        }
    }
    clear(){
        this.items = [];
    }
    getSize(){
        return this.items.length;
    }
    isEmpty(){
        return !this.items.length;
    }
}

class circleQueue extends queue {
    constructor(items){
        super(items)
    }
    getIndex(index){
        return index > this.items.length ? index % ( this.items.length ) : index; 
    }
    find(index){
        if(this.items.length){
            return this.items[this.getIndex(index)]
        } else {
            return null;
        }
    }
    show(){
        console.log(this.items)
    }
}

module.exports = circleQueue;

