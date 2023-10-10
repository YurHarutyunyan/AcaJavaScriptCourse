 function reverseString(s) {
     try{
         typeof s !== "string"
         s = s.split("").reverse().join("");
         console.log(s);       
     }catch(Error){
         console.log("s.split is not a function")    
     }
 }