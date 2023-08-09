function problem11(_2DArray) {
  let product = 1;
  let contains = false;
  for (arr of _2DArray) {
    if (!Array.isArray(arr)) {
      return "Invalid Argument";
    }
    let biggest = Number.MIN_SAFE_INTEGER;
    for (el of arr) {
      if (el < 0) contains = true;
      if (el < 0 && el > biggest) biggest = el;
    }
    if (biggest != Number.MIN_SAFE_INTEGER) {
      product = product * biggest;
    }
  }
  if (contains == true) {
    return product;
  } else {
    return "No negative number";
  }
}
