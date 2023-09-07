function flatten(flattenObject){
    let objectToReturn = {}
    
    function recursionFunction(object,locationAsString=''){
        for(const[key,value] of Object.entries(object)){
            if(value instanceof Object){
                return recursionFunction(value,locationAsString+'.'+key)
            }else{
                objectToReturn[locationAsString+'.'+key] = value;
            }
        }
    return objectToReturn;
    }
    return recursionFunction(flattenObject)
}
let obj ={
    u:1,
    a:{
        b:3,
        c:{
            d:4,
            e:{
                f:8
            }
        }
    }
}