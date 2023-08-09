function problem9(phoneNumber) {
  if (!(phoneNumber.length == 11 || 10)) {
    return "Bad number";
  } else {
    if (phoneNumber.length == 11 && phoneNumber.charAt(0) == "+") {
      for (let i = 1; i < phoneNumber.length; i++) {
        if (
          !(phoneNumber.charCodeAt(i) >= 48 && phoneNumber.charCodeAt(i) <= 57)
        ) {
          return "Bad number";
        }
      }
      return phoneNumber.slice(1, 11);
    } else if (phoneNumber.length == 11 && phoneNumber.charAt(0) != "+") {
      return "BadNumber";
    } else {
      for (let i = 0; i < phoneNumber.length; i++) {
        if (
          !(phoneNumber.charCodeAt(i) >= 48 && phoneNumber.charCodeAt(i) <= 57)
        ) {
          return "Bad number";
        }
      }
      return phoneNumber;
    }
  }
}
