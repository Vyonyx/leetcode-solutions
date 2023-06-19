function longestPalindrome(s: string): string {
    if (s.length === 1) return s.substring(0, 1);

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        [expand(s, i, i), expand(s, i, i + 1)]
            .forEach(str => {
                if (str.length > longest.length)
                    longest = str;
            })
    }

    return longest;
};

function expand(s: string, left: number, right: number) {
    while (
        right < s.length
        && s[left] === s[right]
    ) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
}

// The trick is to expand out from each character in the input string
// and evaluate each palindrome against the previous longest
