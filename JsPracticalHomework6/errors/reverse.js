function reverseAString(s){
try{
 console.log(s.split('').reverse().join(''))   
}catch(Error){
    console.log(Error.message)
    console.log(s)
}
}
reverseAString('poop')