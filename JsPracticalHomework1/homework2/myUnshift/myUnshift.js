function myUnshift(array){
    let newArray = []
    for(let i =1;i<myUnshift.arguments.length;i++){
        newArray.push(myUnshift.arguments[i]);
    }
    for(let i =0;i<array.length;i++){
        newArray.push(array[i])
    }
    console.log(newArray)
    array=newArray
return array.length;
}