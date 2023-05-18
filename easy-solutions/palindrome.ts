/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x: number): boolean {
  const xString = x.toString();

  for (let i = 0; i < xString.length; i++) {
    if (xString[i] !== xString[xString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
