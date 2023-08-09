function problem7(n) {
  let result = `${n}!=${fak(n)}`;
}
function fak(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return n * fak(n - 1);
}
