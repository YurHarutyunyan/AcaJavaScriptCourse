function problem4(matrix, max) {
  let convertedArray = [];
  const resultingArray = [];
  for (let i = 0; i < matrix.length; i++) {
    convertedArray[i] = [];
    let sum = matrix[i].reduce((acc, curr) => acc + curr);
    if (sum > max) {
      for (let j = 0; j < matrix[i].length; j++) {
        convertedArray[i][j] = {
          shouldBeInResultingArray: false,
          value: matrix[i][j],
        };
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        convertedArray[i][j] = {
          shouldBeInResultingArray: true,
          value: matrix[i][j],
        };
      }
    }
  }
  convertedArray = perpendicularCheck(convertedArray, max);
  for (let i = 0; i < convertedArray.length; i++) {
    resultingArray[i] = [];
    for (let j = 0; j < convertedArray[i].length; j++) {
      if (convertedArray[i][j].shouldBeInResultingArray === true) {
        resultingArray[i][j] = convertedArray[i][j].value;
      }
    }
  }
  return resultingArray;
}
function perpendicularCheck(array, max) {
  let perpendicularItemIndex = 0;
  for (let index = 0; index < array.length; index++) {
    console.log("index ", perpendicularItemIndex);
    if (
      array.reduce((acc, curr) => {
        let result = 0;
        result = acc + curr[perpendicularItemIndex].value;
        console.log(
          " perpIndex",
          perpendicularItemIndex,
          "  accamulator  ",
          acc,
          " current item ",
          curr,
          "valueAtIndex",
          `${perpendicularItemIndex}`,
          curr[perpendicularItemIndex].value
        );
        console.log("final result", result);
        return result;
      }, 0) > max
    ) {
      for (let i = 0; i < array.length; i++) {
        array[i][perpendicularItemIndex].shouldBeInResultingArray = false;
      }
    }
    perpendicularItemIndex++;
  }
  return array;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let res = problem4(matrix, 15);
console.log(
  "this is the final result of the problem, it contains only those rows and culumns which's sum is below the given max value"
);
console.log(res);
