function problem10(phrase) {
  let acronym = "";
  let splittedPhrase = phrase.split(" ");
  for (el of splittedPhrase) {
    acronym += el.charAt(0);
  }
  acronym = acronym.toUpperCase();
}
