function createStack(){
    class Node{
        next=null;
        constructor(val){
            this.val=val;
        }
    }
    class Stack{
        tail=null
        size=0;
        head=null;
        push = function(val){
            if(this.size===0){
                this.head=new Node(val)
                this.size+=1;
                this.tail=this.head;
                return
            }
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=new Node(val);
            this.tail=current.next;
            this.size+=1
        }
        pop = function (){
            let current = this.head;
            while(current.next!==this.tail){
                current=current.next;
            }
            let temp = current.next;
            current.next=null
            this.tail=current;
            this.size-=1;
            return temp;
        }
        top =()=>this.tail;
        isEmpty = () => {
            if(this.size===0)return true
            else return false;
        }
        getSize = ()=>this.size;
    }
    return new Stack();
}
const stack = createStack();
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.isEmpty(),stack.getSize())
console.log('head',stack.head,'tail',stack.tail)