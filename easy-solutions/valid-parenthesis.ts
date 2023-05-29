const opposite = {
    ')': '(',
    ']': '[',
    '}': '{'
}

function isValid(s: string): boolean {
  // Array acts as a stack where starting brackets are pushed
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (['(', '[', '{'].includes(currentBracket)) {
            stack.push(currentBracket);
        } else {
            // And if the current bracket is a closing bracket,
            // compare to the popped opening bracket from the stack,
            // and return false if they are not matching
            if (stack.pop() !== opposite[currentBracket]) return false;
        }
    }

    return stack.length == 0 ? true : false;
};
