function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let item = array[i];
    let j = i - 1;
    while (j >= 0 && item < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = item;
  }
  return array;
}

export { insertionSort };
