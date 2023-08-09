function problem12(obj) {
  result = {};
  for ([key, value] of Object.entries(obj)) {
    if (result.hasOwnProperty(value)) {
      if (Array.isArray(result[value])) {
        result[value].push(key);
      } else {
        result[value] = [result[value]];
        result[value].push(key);
      }
    } else {
      result[value] = key;
    }
  }
  return result;
}
