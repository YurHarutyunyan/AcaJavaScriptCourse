function problem16(rec0, rec1) {
  if (defineSquare(rec0) === defineSquare(rec1)) {
    return true;
  } else {
    return false;
  }
}
problem16({ width: 10, height: 5 }, { width: 2, height: 25 });
function defineSquare(rectangle) {
  square = 1;
  for (value of Object.values(rectangle)) {
    square *= value;
  }
  return square;
}
