function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  // left side
  let left = mergeSort(arr.slice(0, mid));

  // right side
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];

  // this comparison only needs to go until one of the arrays is fully incorporated into the new array. This is because both of the arrays are storted and once one of them is incorporated, the other one can be merged as a chunk afterwards
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  newArr = [...newArr, ...arr1.slice(i), ...arr2.slice(j)];

  return newArr;
}

export { merge, mergeSort };
