function bubbleSort(array) {
  let arrLength = array.length - 1;
  for (let j = arrLength; j >= 0; j--) {
    let swapped = false;
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}
console.log(bubbleSort([2, 8, 1, 3, 6, 0, 30, 19, -1, 29]));
