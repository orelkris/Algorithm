function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num < 0) {
    return "cannot find factorial of a negative number";
  }

  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// HELPER METHOD RECURSION
// the pattern here is an outer function that isn't recursive but it calls an inner function that is

function collectOddValues(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    return helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// PURE RECURSION
// collect odd numbers through pure recursion
function collectOddValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));

  return newArr;
}

function power(base, exp) {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}

function fib(num) {
  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

function reverse(string) {
  if (string.length === 0) return "";

  let reverseString = string.slice(-1);

  reverseString = reverseString.concat(
    reverse(string.slice(0, string.length - 1))
  );

  return reverseString;
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  }

  return false;
}

function someRecursive(input, callback) {
  if (input.length === 0) {
    return false;
  }

  if (callback(input[0])) {
    return true;
  }

  return someRecursive(input.slice(1), callback);
}

function flatten(array) {
  let newArr = [];

  array.forEach((item) => {
    if (item instanceof Array) {
      newArr.push(...flatten(item));
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}

export {
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
};
