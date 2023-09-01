function problem3(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8],
];
let result = problem3(matrix);
console.log(result);
