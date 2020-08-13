# Analyzing Performance of Arrays and Objects

_Notes based on Colt Steele's fantastic course._

### 1. Introduction

Objectives of the chapter:

- Understand how objects and arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

### 2. The Big O of Objects

Objects in JS are unordered, key value pairs!

```js
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
```

#### When to use objects:

- When you don't need order
- When you need fast access / insertion and removal

#### Big O of Objects

| Action        | Complexity |
| :------------ | :--------: |
| Insertion     |   `O(1)`   |
| Removal       |   `O(1)`   |
| **Searching** |   `O(n)`   |
| Access        |   `O(1)`   |

_Note: when you don't need any ordering, objects are an excellent choice!_

#### Big O of Objects Methods

| Methods          | Complexity |
| :--------------- | :--------: |
| `Object.keys`    |   `O(n)`   |
| `Object.values`  |   `O(n)`   |
| `Object.entries` |   `O(n)`   |
| `hasOwnProperty` |   `O(1)`   |

```js
Object.keys(instructor);
// ["firstName", "isInstructor", "favoriteNumbers"]

Object.values(instructor);
// ["Kelly", true, [1, 2, 3, 4]]

Object.entries(instructor);
// [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1, 2, 3, 4]]]

instructor.hasOwnProperty(firstName);
// true
```

### 3. QUIZZ – Object Operations Quiz

#### 1. What is the big O for adding a key and a value into an object?

`O(1)`

#### 2. What is the big O for accessing a key in an object?

`O(1)`

#### 3. What is the big O for removing a key in an object?

`O(1)`

### 4. When are Arrays Slow?

Arrays in JS are **ordered lists**!

```js
let name = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'];
```

#### When to use arrays:

- When you need order
- When you need fast access / insertion and removal (sort of...)

#### Big O of Arrays

| Action        |  Complexity   |
| :------------ | :-----------: |
| Insertion     | It depends... |
| Removal       | It depends... |
| **Searching** |    `O(n)`     |
| Access        |    `O(1)`     |

Adding or removing at the end of the array is easy `O(1)` BUT if you want to add or remove an element at the beginning... All the indexes have to changed and as a result, `O(n)`.

`push` and `pop` are always faster than `shift` and `unshift` unless it is an empty array.

### 5. Big O of Array Methods

| Methods                          |   Complexity   |
| :------------------------------- | :------------: |
| `push`                           |     `O(1)`     |
| `pop`                            |     `O(1)`     |
| `shift`                          |     `O(n)`     |
| `unshift`                        |     `O(n)`     |
| `concat`                         |     `O(n)`     |
| `slice`                          |     `O(n)`     |
| `splice`                         |     `O(n)`     |
| `sort`                           | `O(n * log n)` |
| `forEach/map/filter/reduce/etc.` |     `O(n)`     |

### 6. QUIZZ Array Operations Quiz

#### 1. What is the big O for pushing into an array?

`O(1)`

#### 2. What is the big O for shifting into an array?

`O(n)`

#### 3. What is the big O for the `forEach` function?

`O(n)`
