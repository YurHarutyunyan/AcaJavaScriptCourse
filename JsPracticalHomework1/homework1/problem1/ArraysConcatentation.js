function concatenate(arr1, arr2) {
  const res = [];

  if (Array.isArray(arr1)) {
    res.push(...arr1);
  }
  if (Array.isArray(arr1)) {
    res.push(...arr2);
  }
  return res;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
let result = concatenate(arr1, arr2);
console.log(result);
