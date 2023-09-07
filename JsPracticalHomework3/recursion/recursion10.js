function gcd(first, second){
    let max = 1;
    function rec(currentIteration=2){
        if(((first / currentIteration) % 1 === 0)
        &&
        (second/currentIteration)%1 === 0
        ){
            max=currentIteration;
            rec(currentIteration+=1)

        }else{
            rec(currentIteration+=1)
        }
    
    }
    rec()
    return max;
}
console.log(gcd(105,27))
