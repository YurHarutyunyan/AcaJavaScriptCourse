let arr = [];
arr[1] = "aeioulnrst";
arr[2] = "dg";
arr[3] = "bcmp";
arr[4] = "fhvwy";
arr[5] = "k";
arr[6] = "jx";
arr[7] = "qz";
function problem3(word) {
  let wordAsArray = word.split("");
  result = wordAsArray.reduce((acc, currentValue) => {
    result = acc + callBack(arr, currentValue);
    return result;
  }, 0);
}
function callBack(arrayOfCharacterValues, currentValueOfReduceIteration) {
  for (let i = 1; i < arrayOfCharacterValues.length; i++) {
    if (arrayOfCharacterValues[i].includes(currentValueOfReduceIteration)) {
      return i;
    }
  }
}
problem3("ieqxk");
