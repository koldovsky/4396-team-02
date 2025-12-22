let min = function (list) {
  return list.reduce((min, cur) => {
    if (cur < min) {
      return cur;
    }
    return min;
  }, list[0]);
};

let max = function (list) {
  return list.reduce((max, cur) => {
    if (cur > max) {
      return cur;
    }
    return max;
  }, list[0]);
};
