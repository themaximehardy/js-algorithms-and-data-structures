function sameFrequency(num1, num2) {
  const counter = (num) =>
    num
      .toString()
      .split('')
      .reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : (acc[cur] = 1);
        return acc;
      }, {});

  const freqCounterNum1 = counter(num1);
  const freqCounterNum2 = counter(num2);

  for (const key in freqCounterNum1) {
    if (freqCounterNum1.hasOwnProperty(key)) {
      if (!freqCounterNum2[key] || freqCounterNum1[key] !== freqCounterNum2[key]) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  sameFrequency(182, 281), // true
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222), // false
);
