function problem1(matrix) {
  let minArr = [];
  if (Array.isArray(matrix)) {
    for (let el of matrix) {
      if (Array.isArray(el)) {
        let min = el.reduce((acc = Number.MIN_SAFE_INTEGER, curr) => {
          if (acc > curr) {
            acc = curr;
            return acc;
          } else {
            return acc;
          }
        });
        minArr.push(min);
      }
    }
  }
  return minArr;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8],
];
let arr = problem1(matrix);
console.log(arr);
