function areThereDuplicates() {
  let args = [...arguments].sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  let i = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] !== args[j]) {
      i++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates('a', 'b', 'c', 'a'), // true
);
