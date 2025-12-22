// Find Maximum and Minimum Values of a List
var min = function(list){
  return list.reduce((acc, cur) => { return acc < cur ? acc : cur; });
}

var max = function(list){
  return list.reduce((acc, cur) => { return acc > cur ? acc : cur; });
}