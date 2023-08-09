function SumAbove18(numbers) {
  result = numbers.reduce((acc, currentvalue) => {
    if (currentvalue >= 18) {
      result = acc + currentvalue;
      return result;
    } else {
      return acc;
    }
  }, 0);
}
SumAbove18([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]);
