function myAtoi(s: string): number {
  let validNum = "";
  let isNeg = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") continue;
    else if (char === "-" || char === "+") {
      if (validNum.length || s[i + 1] === " ") return 0;
      if (char === "-") isNeg = true;
      validNum += char;
    } else if (!Number.isNaN(Number.parseInt(char))) {
      validNum += char;
      if (Number.isNaN(Number.parseInt(s[i + 1]))) break;
    } else if (validNum.length) break;
    else return 0;
  }

  const parsedNum = Number.parseInt(validNum);
  if (Number.isNaN(parsedNum)) return 0;

  const result = isNeg
    ? Math.max(-(2 ** 31), parsedNum)
    : Math.min(2 ** 31 - 1, parsedNum);

  return result;
}
