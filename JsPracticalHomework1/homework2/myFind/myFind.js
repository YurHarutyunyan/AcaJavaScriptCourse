function myFind(array, callback) {
  for (let item of array) {
    if (callback(item)) {
      return item;
    }
  }
  return undefined;
}
