var counter = 0;
let result = function closure0(){
    return increment()
     function increment(){
        counter+=1;
        return counter;
    }
}
console.log(result())
console.log(result())
console.log(result())