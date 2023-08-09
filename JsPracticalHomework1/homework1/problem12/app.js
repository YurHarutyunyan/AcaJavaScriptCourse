function sortArray(numbers, order) {
  if (order === "Asc") {
    return numbers.sort();
  } else if (order === "Des") {
    return numbers.sort().reverse();
  } else {
    console.log("unsupported order!!!");
  }
}
console.log(sortArray([1, 2, 5, 2, 9, 5, 6], "Des"));
