function generateParenthesis(n: number): string[] {
    const stack: string[] = [];
    const res: string[] = [];

    function backtrack(NOpen: number, NClose: number): void {
        if (NOpen === n && NClose === n) {
            res.push(stack.join(''));
            return;
        }

        if (NOpen < n) {
            stack.push('(');
            backtrack(NOpen + 1, NClose);
            stack.pop();
        }

        if (NClose < NOpen) {
            stack.push(')');
            backtrack(NOpen, NClose + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return res;
};

// The trick to this algorithm is to evaluate the recursive fn using
// two parameters and relational conditions (number of open and close
// parenthesis in the stack array).
