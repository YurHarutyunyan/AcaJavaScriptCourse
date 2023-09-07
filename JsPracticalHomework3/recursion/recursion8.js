function countOfObjects(array,number){
    let count = 0 ; 
    function rec(number,index){
        if(index===array.length){
            return count;
        }
        if(array[index]===number){
            count+=1;
        }
     return rec(number,index+=1)
    }
    rec(number,0)
    return count;
}
console.log(countOfObjects([1,2,3,2,5,2],2))
