var result = 0;
function curry(operator) {
  if (curry.arguments[0] === "add") {
    function add() {
      for (let arg of add.arguments) {
        result += arg;
      }
      return add;
    }
    return add;
  }
  if (curry.arguments[0] === "multiply") {
    result = 1;
    function multiply() {
      for (let arg of arguments) {
        result *= arg;
      }
      return multiply;
    }
    return multiply;
  }
}
