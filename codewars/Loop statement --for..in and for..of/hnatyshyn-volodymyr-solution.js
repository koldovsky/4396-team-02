// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
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
