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
