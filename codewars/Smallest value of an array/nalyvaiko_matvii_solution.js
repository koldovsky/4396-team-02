function min(arr, toReturn) {
  const minValue = arr.reduce((min, cur) => {
    if (cur < min) {
      return cur;
    }
    return min;
  }, arr[0]);
  return toReturn === "index" ? arr.indexOf(minValue) : minValue;
}
