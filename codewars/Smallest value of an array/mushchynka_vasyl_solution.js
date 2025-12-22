function min(arr, toReturn) { 
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return toReturn === 'value' ? arr[minIndex] : minIndex;
}