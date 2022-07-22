// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

// function stringLengthCompare(str1, str2) {
//   return str1.length - str2.length;
// }

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function bubbleSort(arr) {
  // as the numbers bubble up, the unsorted array decreases in size since the last element will always be sorted by the end of the iteration
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    console.log(arr);

    if (!swapped) {
      break;
    }
  }

  return arr;
}

export { bubbleSort };
