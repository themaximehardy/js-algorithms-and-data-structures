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

console.log(
  validAnagram('', ''), // true
  validAnagram('aaz', 'zza'), // false
  validAnagram('anagram', 'nagaram'), // true
  validAnagram('rat', 'car'), // false
  validAnagram('awesome', 'awesom'), // false
  validAnagram('qwerty', 'qeywrt'), // true
  validAnagram('texttwisttime', 'timetwisttext'), // true
);
