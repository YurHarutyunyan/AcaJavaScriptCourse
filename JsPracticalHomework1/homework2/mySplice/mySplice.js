function mySplice(array,start,remove=0){
    let newArray =[]
    let args =mySplice.arguments;
    for(let i=0;i<start;i++){
        newArray.push(array[i])
    }
    for(let i=3;i<args.length;i++){
        newArray.push(args[i])
    }
    for(let i = start+args[2];i<array.length;i++){
        newArray.push(array[i])
    }
return newArray
}