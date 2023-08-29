   function myReduce(array,callback,initial=0){
       let result =0;
       let acc = array[0]
       for(let i = 1;i<array.length;i++){
           acc = callback(acc,item);
       }
   }
 let arr =[1,2,3,4,5]
 let r = arr.reduce((acc,curr)=>{return acc*curr})
