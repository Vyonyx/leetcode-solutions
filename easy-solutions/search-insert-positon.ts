function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const m = Math.floor(left + (right - left) / 2);
        const v = nums[m];
        
        // if value matches target, return it's index
        if (v === target) {
            return m;
        } else if (v < target) {
            left = m + 1;
        } else if (v > target) {
            right = m;
        }
    }

    // if no matches, return the best insertion position for the target
    return left;
};
