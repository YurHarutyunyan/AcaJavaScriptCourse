let memo = [];
function fib(n) {
  if (n <= 1) {
    memo[n] = 1;
    return 1;
  } else {
    if (memo[n - 1] !== undefined && memo[n - 2] !== undefined) {
      return memo[n - 1] + memo[n - 2];
    }
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
}
console.log(fib(1400));
//i have kept the console couse fib 1400 is showing that this is great performance optimization

