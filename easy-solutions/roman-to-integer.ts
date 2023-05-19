const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * This fn tallys the value of each roman numeral by iterating over the input string and returns the total.
 * If the fn encounters notation for 4s and 9s, in adjusts the tally amount to suit.
 */
function romanToInt(s: string): number {
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let value = romanValues[s[i]];
    let nextValue = romanValues[s[i + 1]];

    if (nextValue > value) {
      num += nextValue - value;
      i++;
    } else {
      num += value;
    }
  }

  return num;
}
