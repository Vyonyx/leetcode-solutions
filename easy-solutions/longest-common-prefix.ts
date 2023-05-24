function longestCommonPrefix(strs: string[]): string {
  // edge cases where strs array is shorter than expected
  if (strs.length < 1) return "";
  else if (strs.length === 1) return strs[0];

  // sorting the array allows the retrieval of the shortest word
  strs.sort((a, b) => a.length - b.length);
  const firstWord = strs[0];
  let prefix = "";

  // loop through the characters of an array
  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];

    // and check it against the character of the same index on every word
    const isMatch = strs.every((word) => word[i] === char);
    if (isMatch) prefix += char;
    // and if it doesn't match, break out of the loop
    else break;
  }

  return prefix;
}
