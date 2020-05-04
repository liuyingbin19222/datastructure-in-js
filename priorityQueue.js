/**
 * 优先级队列，数字小的优先级高;
 * 
 */
class priorityQueue{
    constructor(){
        this.priority = [];
    }
    enqueue(value,_priority){
        const queueELement = {value,_priority}
        if(this.priority.length == 0){
            this.priority.push(value)
        }else {
            const preIndex = this.priority.findIndex( (item)=> queueELement._priority < item._priority )
            if(preIndex > -1 ){
                this.priority.splice(preIndex,0,queueELement); // 相当于添加元素;
            }else {
                this.priority.push(queueELement);
            }
        }
    }
    dequeue(){
        return this.priority.shift(); // 返回第一个元素;
    }
    front(){
        return this.priority[0];
    }
    clear(){
        this.priority = []
    }
    getSize(){
        return this.priority.length;
    }
    isEmpty(){
        return !this.priority.length;
    }
    show(){
        console.log("展示队列:",this.priority)
        return this.priority;
    }
}

module.exports = priorityQueue