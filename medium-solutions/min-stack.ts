class MinStack {
    private stack: number[];
    private min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.min.length) {
            if (val <= this.min[this.min.length - 1]) {
                this.min.push(val);
            }
        } else this.min.push(val);
    }

    pop(): void {
        if (this.stack[this.stack.length - 1] === this.getMin()) {
            this.min.pop();
        }
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
