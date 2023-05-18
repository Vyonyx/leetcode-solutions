/*
 * Check to see if an array of words share a prefix substring, returning the substring if all words match.
 */
function longestCommonPrefix(strs: string[]): string {
  // Prefix variable gets manipulated during the for loops.
  let prefix = "";
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    // Char variable also gets manipulated by the following loop.
    let char = "";

    for (let j = 0; j < strs.length; j++) {
      // If the two word's characters match, change the char variable's value to the common character.
      if (firstWord[i] === strs[j][i]) {
        char = firstWord[i];
        // If the characters don't match, reset the char variable.
      } else char = "";
    }
    // If all words share the same character, add that char to the prefix variable.
    if (char) prefix += char;
  }

  return prefix;
}
