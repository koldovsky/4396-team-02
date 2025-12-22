// Smallest value of an array
function min(arr, toReturn) {
  let min = arr.reduce((acc,cur) => acc < cur ? acc : cur);
  return toReturn === 'index' ? arr.findIndex(cur => cur === min) : min;
}