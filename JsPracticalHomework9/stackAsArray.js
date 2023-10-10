class Stack{
    #stack = []
    push(item){
        this.#stack.push(item)
    }

    pop(){
      return this.#stack.pop()
    }
    top(){
        return this.#stack[this.#stack.length-1]
    }
    isEmpty(){
        if(this.#stack.length){
            console.log(this.#stack.length)
            return false
        }

        else {
            console.log(this.#stack.length)
            return true
        }
    }
    getSize(){
        return this.#stack.length
    }
    get stack(){
        return this.#stack
    }


}
let a = new Stack()
a.push(2)
a.push(84)
a.push(35)
a.push(38)
console.log(a.stack)
a.pop()

console.log(a.stack)
a.pop()
a.pop()
a.pop()
console.log( a.isEmpty())
