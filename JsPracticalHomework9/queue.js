function createAQueue(){
    class Queue{
        arr = []
        enqueue = (val)=>{
            this.arr.push(val);
        }
        dequeue = ()=>{
            return this.arr.shift();
        }
        front = ()=>{
            return this.arr[0];
        }
        isEmpty=()=>{
            if(this.arr[0]===null)return true
            else return false;
        }
        size = ()=>{
            return this.arr.length;
        }
        print = ()=>{
            return this.arr;
        }
    }
    return new Queue
}
const queue = createAQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.print());

