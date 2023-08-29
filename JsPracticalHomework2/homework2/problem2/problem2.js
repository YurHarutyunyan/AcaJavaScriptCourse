function problem2(matrix, word) {
  for (el of matrix) {
    if (el.includes(word)) {
      return true;
    }
  }
  return false;
}
