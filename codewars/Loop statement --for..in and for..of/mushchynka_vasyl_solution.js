// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  let resArray = [];
  
  for (let key in obj) {
    if (key.length === 5) {
      resArray.push(key);
    }
    if (obj[key].length === 5) {
       resArray.push(obj[key])
    }
  }
  
  return resArray;
}