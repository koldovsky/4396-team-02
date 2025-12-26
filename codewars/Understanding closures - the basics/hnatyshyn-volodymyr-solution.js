// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(function () {
      return i;
    });
  }

  return result;
}
