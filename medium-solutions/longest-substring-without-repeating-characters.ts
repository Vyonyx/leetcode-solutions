function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let subStr = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (Array.from(subStr).includes(char)) {
      const lastGoodPoint = Array.from(s.substring(0, i)).lastIndexOf(char);
      i = lastGoodPoint;
      subStr = "";
    } else {
      subStr += char;
    }

    longest = Math.max(longest, subStr.length);
  }

  return longest;
}

// This solution iterates over the input string and adds the characters to a substring variable.
// Each loop checks to see if the current character is already in the substring variable, and if it is,
// sets the loop variable ("i") to the "last good position" (last index of the character occuring within
// a substring of the input string - between index 0 and the current value of "i").
// The substring variable is also reset and the loop begins again at the last good point, adding the
// charcters to an empty substring variable.
// The longest is calculated using the highest value between the previously recorded length and the
// length of the current substring to see which is the longest.
