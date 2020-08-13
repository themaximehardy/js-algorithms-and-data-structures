# Problem Solving Approach

_Notes based on Colt Steele's fantastic course._

### Introduction

Objectives of the chapter:

- Define **what an algorithm is**
- Devise a **plan to solve algorithms**
- Compare and contrast **problem solving patterns** including _frequency counters_, _two pointer problems_ and _divide and conquer_

#### What is an algorithm?

A **process** or a **set of steps** to accomplish a certain task.

How do you improve?

1. **Devise** a plan for solving problems
2. **Master** common problem solving patterns

#### Problem solving

1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve or simplify
5. Look back and refactor

---

### Step 1: Understand the Problem

_Note: many of these strategies are adapted from **George Polya**, whose book "*How To Solve It*" is a great resource for anyone who wants to become a better problem solver_

Understand the problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem... That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

Here is an example –

> Write a function which takes two numbers and returns their sum.

1. Can I restate the problem in my own words?
   > Implement addition
2. What are the inputs that go into the problem?
   > `string`, `array`, strictly numbers (floats, ints)... large numbers? There are some important distinctions between these inputs. Is it always two inputs or more?
3. What are the outputs that should come from the solution to the problem?
   > Same issues as question 2
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem... That's okay; it's still worth considering the question at this early stage.)
   > ...
5. How should I label the important pieces of data that are a part of the problem?
   > ...

### Step 2: Concrete Examples

Exploring / coming up with examples can help you understand the problem better

Examples also provide sanity checks that your eventual solution works how it should (...user stories, unit tests)

1. Start with **simple examples**
2. Progress to **more complex examples**

(then move to the "_edge cases_")

3. Explore examples with **empty inputs**
4. Explore examples with **invalid inputs**

Here is an example –

> Write a function which takes in a string and returns counts of each character in the string.

```js
charCount('aaaa'); // {a: 4}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}
// I got a first question... Do we have to include all the alphabet letter even if the letter is not present in the string? // {a: 4, b: 0, c: 0,...}

charCount('my phone number is 123456789'); // What about space char and numbers?
charCount('Hello hi'); // What we do with casing? Uppercase or lowercase only?

charCount(); // null, -1, false or even an error?
charCount(''); // null, -1, false or even an error?

charCount(2);
charCount(null);
charCount(false);
```

### Step 3: Break It Down

Explicitly write out the steps you need to take.

Here is an example –

> Write a function which takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  //// if the char is a number/letter AND is a key in object, add one to count
  //// if the char is a number/letter AND not in object, add it to object and set value to 1
  //// if the char is something else (space, period, etc.) don't do anything
  // return object at the end
}
```

### Step 4: Solve Or Simplify

Solve the problem, but if you can't... solve a simpler problem!

Try to ignore the part that is giving you a really hard time in order to focus on everything else (tip for interviews).

Simplify:

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

Here is an example –

> Write a function which takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    //// if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //// if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  //// if the char is something else (space, period, etc.) don't do anything
  //// 👆 we've not finished this part which can be the "trickiest" but we've done everything else...

  // return object at the end
  return result;
}
```

### Step 5: Look Back and Refactor

Refactoring questions:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```js
function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return !(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123));
}
```
