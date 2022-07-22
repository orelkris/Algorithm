import {
  countDown,
  sumRange,
  factorial,
  collectOddValues,
  collectOddValuesPure,
  power,
  productOfArray,
  recursiveRange,
  fib,
  reverse,
  isPalindrome,
  someRecursive,
  flatten,
} from "./recursion.js";

import { bubbleSort } from "./bubble-sort.js";

import { insertionSort } from "./insertion-sort.js";

import { mergeSort } from "./merge-sort.js";

// MERGE SORT
console.log(mergeSort([1, 2, 100, 3, 99, 4, 10000, 2]));

// INSERTION SORT
console.log(insertionSort([1, 10, 19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

// BUBBLE SORT
console.log(bubbleSort([1, 10, 19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// RECURSION
// countDown(3);
// console.log("Sum Range:", sumRange(4));
// console.log("Factorial:", factorial(5));
// console.log("Helper Odd:", collectOddValues([1, 2, 3, 5]));
// console.log("Pure Odd:", collectOddValuesPure([1, 2, 3]));
// console.log("Power:", power(2, 0));
// console.log("Product of Array:", productOfArray([5, 6, 7]));
// console.log("Recursive Range:", recursiveRange(10));
// console.log("Fibonacci:", fib(4));
// console.log("Reverse:", reverse("hello"));
// console.log("Is Palindrome:", isPalindrome("racecar"));
// console.log(
//   "Some recursive:",
//   someRecursive([3], (val) => val % 2 === 1)
// );
// console.log("Flatten:", flatten([1, [2, 4, [3, 5], 9], 7, 4]));
