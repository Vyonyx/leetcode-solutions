function evalRPN(tokens: string[]): number {
    const stack: string[] = [];
    const operators: string[] = ['+', '-', '*', '/'];

    for (let i = 0; i < tokens.length; i++) {
        const x = tokens[i];

        // make the calculation if the currently indexed char is an operator
        if (operators.includes(x)) {
            const num2 = Number.parseInt(stack.pop());
            const num1 = Number.parseInt(stack.pop());

            let result: number;
            if (x == '+') result = num1 + num2;
            else if (x == '-') result = num1 - num2;
            else if (x == '*') result = num1 * num2;
            // divisions should be rounded down to the nearest integer
            else if (x == '/') result = Math.trunc(num1 / num2);
            stack.push(result.toString());
        // else push the number to the stack for a future calculation
        } else {
            stack.push(x);
        }
    }
    return Number.parseInt(stack[0]);
};
