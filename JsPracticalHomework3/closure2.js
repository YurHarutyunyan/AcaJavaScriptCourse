let array= [];
function createCachingFunction(value){
    if(array.includes(value)){
        console.log(value,'cached',array)


    }else{
        array.push(value);
        console.log(value,'calculated',array)
        return value;
    }
}
createCachingFunction(5)
createCachingFunction(3)
createCachingFunction(4)
createCachingFunction(5)