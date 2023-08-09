function problem8(password) {
  let validationMap = new Map();
  if (password.length >= 6 && password.length <= 16) {
    validationMap.set("length", true);
  }
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      validationMap.set("lowercase", true);
    } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      validationMap.set("upperCase", true);
    } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      validationMap.set("numbers", true);
    } else if (password.charCodeAt(i) == 64 || 35 || 36) {
      validationMap.set("symbol", true);
    }
  }
  if (validationMap.size == 5) return "valid";
  else return "invalid";
}
