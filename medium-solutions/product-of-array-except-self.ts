function productExceptSelf(nums: number[]): number[] {
    const calculated: {[key: number]: number} = {};

    const prodArr = nums.map((num, i, arr) => {
        if (calculated[num] === undefined) {
            const product = arr.reduce((acc, n, idx) => {
                if (i === idx) return acc;
                return acc * n;
            }, 1)

            calculated[num] = product;
            return product;
        }
        return calculated[num];
    })

    return prodArr;
};
