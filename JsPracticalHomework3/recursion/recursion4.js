function checkPalindrome(word, index = 0) {
  if (word.length % 2 == 0) {
    if (index === word.length / 2) {
      return true;
    }
  } else {
    if (index === Math.floor(word.length / 2)) {
      return true;
    }
  }
  if (word.charAt(0) === word.charAt(word.lenght - index)) {
    checkPalindrome(word, (index += 1));
  } else {
    return false;
  }
}
