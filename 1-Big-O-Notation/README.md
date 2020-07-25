# Big O Notation

_Notes based on Colt Steele's fantastic course._

### **SUMMARY**

- To _analyze the performance of an algorithm_, we use **Big O Notation**
- Big O Notation can give us a _high level of understanding of_ the **time** or **space complexity** of an algorithm
- Big O Notation _doesn't care about precision_, **only about general trends** (linear? quadratic? constant?)
- The times or space complexity (as measured by Big O) **depends only on the algorithm**, not the hardware used to run the algorithm

### 1. Introduction to Big O

Imagine we have multiple implementations of the same function. **How can we determine which one is the "best"?**

That's what Big O is about. It's a way of generalizing code and talking about it, comparing code and its performance. Big O offers us a numeric representation of the performance of code.

"_Write a function that accepts a string input and returns or reversed copy._" There are different approaches... How do we know which one is best?

But who cares?

- It's important to have a precise vocabulary to talk about code performance
- Useful for discussing trade-offs between ≠ approaches
- It helps to identify parts of the code that are inefficient
- It comes up in interviews

### 1. Timing our code

What does better mean?

- Faster? (let's focus on speed here)
- Less memory-intensive?
- More readable?

An example, here we want to write a function that calculates the sum of all numbers from 1 up to (and including) som number n.

Slow version:

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

`Time Elapsed: 1.139938876003027 seconds.`

Fast version:

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

`Time Elapsed: 0.0005955959856510162 seconds.`

The time `perfomance` is very different depending of the version. It seems **fast version is much efficient**.

But, the **problem with time**:

- Different machines will record different times
- The _same_ machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?

### 2. Counting Operations

If not time, then what?

Rather than counting _seconds_, which are so **variable**... Let's count the _number_ of simple operations the computer has to perform (because it is constant)!

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

1 multiplication, 1 addition and 1 division = **3 simple operations**

```js
function addUpTo(n) {
  let total = 0; // 1 assignement
  for (let i = 1; i <= n; i++) {
    // 1 assignement ; n comparisons ;  n additions AND n assignements
    total += i; // n additions AND n assignements
  }
  return total;
}
```

If `n` is 5, it's 5 operations
If `n` is 1000, it's 1000 operations
...
It's `n` operations

Counting is hard! Depending on what we count, the number of operations can be as low as `2n` or as high as `5n + 2`. But regardless of the exact number, the number of operations grows roughly _proportionally with n_.

We will focus on the big picture with Big O. We want to see the trend.

### 3. Visualizing Time Complexities

Look at [Performance Tracker](https://rithmschool.github.io/function-timer-demo/).

### 4. Introducing... Big O

Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

> We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases.

- f(n) could be **constant** (**f(n) = 1**)
- f(n) could be **linear** (**f(n) = n**)
- f(n) could be **quadratic** (**f(n) = n^2**)
- ...

👇 It is always constant – always 3 operations `O(1)`

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

👇 Number of operations is (eventually) bounded by a multiple of `n` (say, `10n`) `O(n)`

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

👇 first loop `O(n)`, second loop `O(n)` => `O(n)` (big picture).

```js
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}
```

👇 here we have a **nested loop**. First loop `O(n)` and inside we have a second loop `O(n)` => `O(n^2)`.

```js
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

> Note: Remember that it's just a **generalized way for talking about how efficient an algorithm is**. As an _input_ and grows, how does that change to reflect in the _runtime_?

### 5. Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

#### Constants Don't Matter

|    Initial     | Simplified |
| :------------: | :--------: |
|  ~~`O(2n)`~~   |   `O(n)`   |
|  ~~`O(500)`~~  |   `O(1)`   |
| ~~`O(13n^2)`~~ |  `O(n^2)`  |

#### Smaller Terms Don't Matter

|        Initial         | Simplified |
| :--------------------: | :--------: |
|    ~~`O(n + 10)`~~     |   `O(n)`   |
|  ~~`O(1000n + 50)`~~   |   `O(n)`   |
| ~~`O(n^2 + 5 n + 8)`~~ |  `O(n^2)`  |

#### Big O Shorthands

1. _Arithmetic operations_ are **constant** (`+`, `-`, `/`, `*`,...)
2. _Variable assignement_ is **constant**
3. _Accessing elements_ in an array (by index) or object (by key) is **constant**
4. _In a loop_, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

![graphs](../img/1-5-graphs.png?raw=true 'graphs')

### 6. QUIZZ – Big O Time Complexity Quiz

#### 1. Simplify the big O expression as much as possible - `O(n + 10)`

`O(n)`

#### 2. Simplify the big O expression as much as possible - `O(100 * n)`

`O(n)`

#### 3. Simply the following big O expression as much as possible - `O(25)`

`O(1)`

#### 4. Simply the following big O expression as much as possible - `O(n^2 + n^3)`

`O(n^3)`

#### 5. Simply the following big O expression as much as possible - `O(n + n + n + n)`

`O(n)`

### 7. QUIZZ – Big O Time Complexity Quiz 2

#### 1. Determine the time complexity for the following function

```js
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

`O(n)`

#### 2. Determine the time complexity for the following function

```js
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

`O(1)`

#### 3. Determine the time complexity for the following function

```js
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

`O(n)`

#### 4. Determine the time complexity for the following function

```js
function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

`O(n)`

#### 5. Determine the time complexity for the following function

```js
function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

`O(n^2)`

### 8. Space Complexity

So far, we've been focusing on **time complexity**: how can we analyze the _runtime_ of an algorithm as the size of the inputs increase?

We can also use big O notation to analyse **space complexity**: how much additional memory do we need to allocate in order to run the code in our algorithm?

What about the inputs?

Sometimes we can hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs. Here we are going to focus on what is happening inside of the algorithm.

#### Space Complexity in JS (Rules of Thumb)

- Most primitives (`booleans`, `numbers`, `undefined`, `null`) are constant space
- Strings require `O(n)` space (where `n` is the string length)
- Reference types are generally `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

```js
function sum(arr) {
  let total = 0; // one number
  for (let i = 0; i < arr.length; i++) {
    // let i = 0 – another number
    total += arr[i];
  }
  return total;
}
```

👆 `O(1)` space!

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // one array which is directly proportionate to the length of arr
  }
  return newArr;
}
```

👆 `O(n)` space!

### 9. QUIZZ – Big O Space Complexity Quiz

#### 1. Determine the space complexity for the following function

```js
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

`O(1)`

#### 2. Determine the space complexity for the following function

```js
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

`O(1)`

#### 3. Determine the space complexity for the following function

```js
function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

`O(n)`

#### 4. Determine the space complexity for the following function

```js
function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

`O(n)`

### 10. Logs and Section Recap

We've encoutered some of the most common complexities: `O(1)`, `O(n)`, `O(n^2)` but sometimes big O expressions involve more complex mathematical expressions... A common one is **logarithm**.

What is a log again?

A logarithm is the inverse of exponentiation. So just like division and multiplication are a pair logarithms and exponent exponentiation are a pair.

You would read this 👇 as _log base two of eight equals three_.

```
log2(8) = 3

2^3 = 8

log2(value) = exp => 2^exp = value
```

> Note (1): We'll omit the 2 `log === log2` (but we need a base).

> Note (2): the logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**.

|     8      |       25       |
| :--------: | :------------: |
|  8 (/ 2)   |    25 (/ 2)    |
|  4 (/ 2)   |   12.5 (/ 2)   |
|  2 (/ 2)   |   6.25 (/ 2)   |
|     1      |  3.125 (/ 2)   |
|     –      |  1.5625 (/ 2)  |
|     –      |    0.78125     |
| log(8) = 3 | log(25) ≈ 4.64 |

**Logarithmic time complexity is great!**

Who Cares?

1. **Certain searching algorithms** have _logarithmic time complexity_.
2. **Efficient sorting algorithms** involve _logarithms_.
3. **Recursion** sometimes involves _logarithmic space complexity_.
