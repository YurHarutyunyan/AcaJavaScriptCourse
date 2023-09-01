const counter = function createCounter() {
  let counter = 0;
  //   function innerFunc() {
  //     counter += 1;
  //     return counter;
  //   }
  //   return innerFunc();
  let result = () => {
    return (counter += 1);
  };
  return result();
};
console.log(counter());
