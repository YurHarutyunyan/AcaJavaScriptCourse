function problem14(obj1, obj2) {
  if (!(Object.keys(obj1).length == Object.keys(obj2).length)) {
    return false;
  }
  for (key of Object.keys(obj1)) {
    if (obj2.hasOwnProperty(key)) {
      if (!(obj1[key] === obj2[key])) {
        return false;
      }
    } else return false;
  }
  return true;
}
