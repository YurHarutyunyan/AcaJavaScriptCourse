function mySlice(array,start=0,end=Array.length){
    let newArray = []
    for(let i =start;i<end;i++){
        newArray.push(array[i])
    }
    return newArray;
}