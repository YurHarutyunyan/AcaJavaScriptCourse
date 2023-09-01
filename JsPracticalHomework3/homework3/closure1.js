let secret = function outer() {
  let privateVariable;
  function methodsForPrivateVariable() {
    let result = {
      get: function get() {
        return privateVariable;
      },
      set: function set(value) {
        privateVariable = value;
      },
    };
    return result;
  }
  return methodsForPrivateVariable;
};
secret.set(40);
console.log(secret.get());
