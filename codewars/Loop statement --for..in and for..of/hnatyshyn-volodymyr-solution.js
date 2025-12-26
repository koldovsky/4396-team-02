function giveMeFive(object) {
  const result = [];

  for (let key in object) {
    if (key.length === 5) {
      result.push(key);
    }

    if (object[key].length === 5) {
      result.push(object[key]);
    }
  }

  return result;
}
