class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(element){ // 追加元素;
        const node = new Node(element);
        let current = null;
        if(this.head == null){
            head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    insert(position,element){
        if(position >= 0 && position <= this.length){
            const node = new Node(element);
            let current = this.head;
            let previous = null;
            let index = 0;
            if(position == 0){
                this.head = node;
            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }else {
            console.log("插入失败");
            return false;
        }
    }
    size(){
        console.log("链表大小:",this.length);
        return this.length;
    }
    getIndex(element){ 
        //获取元素下标;
        let index = -1;
        let current = this.head;
        while(current){
            if(element == current.element){
                return index+1;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    
    removeat(position){
        let current = this.head;
        let index = 0;
        if(position >= 0&&  position < this.length){
            if(position == 0){
                this.head = current.next;
            }else {
                while( index < position-1){
                    index++;
                    current = current.next;
                }
                // current 就是要删除的点;
                current.next =  current.next.next;
                this.length--;
                return true;
            }
        }
        return false;
    }

}

module.exports = LinkedList;
