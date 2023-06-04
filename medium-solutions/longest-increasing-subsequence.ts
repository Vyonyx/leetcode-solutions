function longestConsecutive(nums: number[]): number {
  if (nums.length === 0 || nums.length === 1) return nums.length;

  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);

  const countTracker: number[] = [];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    const prevNum = nums[i - 1];

    if (currNum === prevNum + 1) {
      count++;
    } else {
      countTracker.push(count);
      count = 1;
    }
  }

  return Math.max(...countTracker, count, 0);
}
