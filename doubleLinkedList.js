/**
 * 双向链表的实现;
 * 
 */


class Node{
    constructor(element){
        this.element = element;
        this.previous = null;
        this.next = null;
    }
}
class doubleLinkedlist {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(position,element){
        let index = 0;
        if(position >= 0 && position <= this.length){
            const node = new Node(element);
            let current = this.head;
            let previous = null;
            if(position == 0){
                if(!this.head){
                    node.next = current;
                    this.head = node;
                    current.previous = node;
                }else{
                    this.head = node ;
                    this.tail = node;
                }
            }else if(position == this.length) {
                current = this.tail;
                current.next = node;
                node.previous = current;
                this.tail = node;
            }else { 
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.previous = previous;
                node.next = current;
                previous.next = node;
                current.previous = node;
            }
            this.length++;
            return true;
        }
    }
    removeat(position){
        if(position < 0 || position > this.length){
            return false;
        }else{
            let current = this.head;
            let previous = null;
            let index = 0;
            
            if(position == 0){
                this.head = this.head.next;
                this.head.previous = null;
                if(this.length == 1){
                    this.tail = null;
                }
            }else if(position == this.length - 1){
                this.tail = this.tail.previous;
                this.tail.next = null;
            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next; 
                current.next.previous = previous;
            }
            this.length--;
            return true;
        }
    }
}

module.exports = doubleLinkedlist;

