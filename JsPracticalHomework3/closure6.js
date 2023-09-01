function factory(operation) {
  if (operation === "add") {
    return function () {
      let result = 0;
      for (let arg of arguments) {
        result += arg;
      }
      return result;
    };
  }

  if (operation === "multiply") {
    return function () {
      let result = 1;
      for (let arg of arguments) {
        result *= arg;
      }
      return result;
    };
  }
}

// code in the bottom is independent of operation argument, because even without givving argument i can call obj.multiply(2,3)
function factory(operation) {
  return {
    add: function () {
      let result = 0;
      for (let arg of arguments) {
        result += arg;
      }
      return result;
    },

    multiply: function () {
      let result = 1;
      for (let arg of arguments) {
        result *= arg;
      }
      return result;
    },
  };
}
