function removeDuplicates(nums: number[]): number {
    let nextUniqueIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        const prevUniqueIdx = nextUniqueIdx - 1;
        if (nums[i] !== nums[prevUniqueIdx]) {
            nums[nextUniqueIdx] = nums[i];
            nextUniqueIdx++;
        }
    }

    return nextUniqueIdx;
};
