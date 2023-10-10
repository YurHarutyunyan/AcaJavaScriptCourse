function createALinkedList(dataOfTheFirstElement){
    class LinkedList{
        head=null
        length=1
        constructor(data){
            this.head=new Node(data);
        }
        append = function(data){
            while(this.head.next){
                this.head=head.next;
            }
            this.head.next=new Node(data);
            this.length+=1

        }
        prepend = function(data){
            let first = new Node(data);
            first.next=this.head;
            this.head=first;
            this.length+=1
        }
        insert = function(data,index){
            if(index>this.length){
                return false;
            }
            let counter=1;
            while(counter!==index-1){
                this.head=this.head.next;
                counter+=1;
            }
                let nodeToInsert = new Node(data)
                nodeToInsert.next=this.head.next;
                this.head.next=null;
                this.head.next=nodeToInsert;            
                this.length+=1
            }
        removeAt = function(index){
            if(index>this.length)return null
            let counter =1
            let prev = null;
            let current = this.head;
            while(index>counter){
                prev=current;
                current=current.next;
                counter+=1;
            }             
            prev.next=current.next;
            this.length-=1;
            return current.data;
        }
        remove = function (data){
            let counter=0;
            let prev=null;
            let current=this.head;
            while(current.data!==data){
                if(counter===this.length)return false
                counter+=1;
                prev=current;
                current=current.next;
            }
            prev.next=current.next;
        }
        getSize = function(){
            return this.length;
        }
        isEmpty = function(){
            if(this.length===0)return true
            else return false;
        }
        printList = function(){
            let current = this.head;
            while(current!==null){
                console.log(current.data)
                current=current.next
            }
        }
}
    class Node{
        data;
        next=null;
        constructor(data){
            this.data = data;
        }
    }
    return new LinkedList(dataOfTheFirstElement)
}
const  a = createALinkedList(2);
a.append(5)
a.prepend(3)
a.prepend(4)
//[4,3,2,5]
a.printList()
