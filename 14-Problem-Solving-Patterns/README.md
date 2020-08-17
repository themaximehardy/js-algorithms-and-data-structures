# Problem Solving Patterns

_Notes based on Colt Steele's fantastic course._

### 1. Introduction

How do you improve?

1. **Devise** a plan for solving problems (previous chapter)
2. **Master** common problem solving patterns (here we are)

Some patterns...

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- ...

### 2. Frequency Counter Pattern

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or `O(n^2)` operations with arrays / strings.

> An example: write a function called `same`, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be the same frequency)
```

```js
// my solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter = (arr) => {
    return arr.reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});
  };

  const frequencyCounter1 = counter(arr1);
  const frequencyCounter2 = counter(arr2);

  for (const key in frequencyCounter1) {
    if (frequencyCounter1.hasOwnProperty(key)) {
      const squarredValue = key ** 2;
      if (!(squarredValue in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[squarredValue] !== frequencyCounter1[key]) {
        return false;
      }
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2, 5, 9], [9, 1, 4, 4, 25, 81]));
```

!! 2 different loops ARE MUCH BETTER than 2 nested loops...

### 3. Frequency Counter: Anagram Challenge

> Anagrams: given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```js
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
```

### 4. Coding Exercice 1: Frequency Counter - validAnagram

Max's solution

```js
// my solution
function validAnagram(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }

  const counter = (word) =>
    word.split('').reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});

  const freqCounterW1 = counter(w1);
  const freqCounterW2 = counter(w2);

  for (const key in freqCounterW1) {
    if (freqCounterW1.hasOwnProperty(key)) {
      if (!freqCounterW2[key] || freqCounterW2[key] !== freqCounterW1[key]) {
        return false;
      }
    }
  }

  return true;
}
```

### 5. Anagram Challenge Solution

Colt's solution

```js
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
```

### 6. Multiple Pointers Pattern

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. **Very efficient** for solving problems with minimal space complexity as well.

> An example: write a function called `sumZero` which accepts a **sorted** array of integers. The function should find the **first pair** where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

### 7. Multiple Pointers: Count Unique Values Challenge

Implement a function called `countUniqueValues`, which accepts **a sorted array**, and **counts the unique values** in the array. There can be negative numbers in the array, but it will always be sorted.

```js
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([0]); // 2
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

### 8. Coding Exercice 2: Multiple Pointers - countUniqueValues

```js
// my solution
function countUniqueValues(sortedArray) {
  const n = sortedArray.length;
  if (!n) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < n; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      i++;
      sortedArray[i] = sortedArray[j];
    }
  }

  return i + 1;
}
```

### 9. Count Unique Values Solution

```js
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

### 10. Sliding Window Pattern

This pattern involves creating a **window** which can either be an _array_ or _number_ from one position to another. Depending on a certain condition, the window either _increases_ or _closes_ (and a new window is created). Very useful for **keeping track of a subset of data** in an array/string etc.

> An example: write a function called `maxSubarraySum` which accepts an array of integers and a number called **n**. The function should **calculate the maximum sum of n consecutive elements** in the array.

```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

```js
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
```

### 11. Divide And Conquer Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This process can tremendously **decrease time complexity**.

> An example: given a **sorted array** of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return `-1`.

```js
search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1
```

A naive solution – **Linear Search**, time complexity `O(n)`.

```js
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

**Binary Search** has a time complexity `log(n)`.
