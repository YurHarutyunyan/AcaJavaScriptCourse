function sumOfDigits(number){
    let sum = 0;
    function rec(number){
        if(number<10){
            sum += number;
            return sum;
        }
        sum+=number%10;
        console.log(sum)
        rec(Math.floor(number/10))
    }
    rec(number)
    return sum;
}