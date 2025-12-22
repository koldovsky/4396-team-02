let min = function(list){
  let minNum = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < minNum) {
      minNum = list[i];
    }
  }
  return minNum;
}

let max = function(list){
  let maxNum = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > maxNum) {
      maxNum = list[i];
    }
  }
  return maxNum;
}