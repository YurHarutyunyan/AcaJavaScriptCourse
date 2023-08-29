function mySome(array,callback){
    for(let item of array){
        if(callback(item)) return true;
    }
    return false;
}