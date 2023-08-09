function problem2(n) {
  if (n <= 1) return 1;
  else {
    return problem2(n - 1) + problem2(n - 2);
  }
}
console.log(problem2(2));
