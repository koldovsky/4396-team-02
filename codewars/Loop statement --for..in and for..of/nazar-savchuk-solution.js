// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let result = [];
  for (let i in obj) {
    if (i.length === 5) result.push(i);
    if (obj[i].length === 5) result.push(obj[i]);
  }
  return result;
}
