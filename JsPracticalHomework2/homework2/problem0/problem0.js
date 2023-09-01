function problem0(matrix) {
  let sumArr = [];
  if (Array.isArray(matrix)) {
    for (let el of matrix) {
      if (Array.isArray(el)) {
        let sum = el.reduce((acc, curr) => acc + curr);
        sumArr.push(sum);
      }
    }
  }
  return sumArr;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8],
];
let sums = problem0(matrix);
