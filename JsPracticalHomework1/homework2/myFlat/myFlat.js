function myFlat(array, depth = 1) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      let count = 1;
      deeper(item, count);
    } else {
      newArray.push(item);
    }
  }
  function deeper(array, counter) {
    for (let item of array) {
      if (Array.isArray(item)) {
        if (counter < depth) {
          counter++;
          deeper(item, counter);
        } else {
          newArray.push(item);
        }
      } else {
        newArray.push(item);
      }
    }
  }
  return newArray;
}
