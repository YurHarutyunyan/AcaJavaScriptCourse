function problem4(_2dArr) {
  let sumArr = _2dArr.map((arr) => {
    let sum = arr.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  });
  console.log(sumArr);
  return sumArr;
}
problem4([
  [1, 23],
  [4, 6],
  [7, 9],
]);
