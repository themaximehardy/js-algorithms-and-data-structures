// function charCount(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

// REFACTORED VERSION

function charCount(str) {
  const obj = {};
  for (let char of str) {
    // charCodeAt() might be a faster solution than a regex!
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

console.log(charCount('Hello hi!'));
