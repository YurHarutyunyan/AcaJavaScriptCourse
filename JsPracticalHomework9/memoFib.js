function fibDeterminator(n){
    const memo = new Map();
    memo.set(0,0)
    memo.set(1,1)
    function counter(n){
        if(n<=1){
            return n;
        }
        if(memo.get(n-1) !== undefined){
            memo.set(n,memo.get(n-1)+memo.get(n-2)) 
            return memo.get(n)
        }
        if(memo.get(n-2) !== undefined){
            memo.set(n,counter(n-1)+memo.get(n-2)) 
            return memo.get(n)
        }
        
        memo.set(n, counter(n-1)+counter(n-2))
        return memo.get(n);
    }
    counter(n)
    console.log(memo)
}
fibDeterminator(505)
