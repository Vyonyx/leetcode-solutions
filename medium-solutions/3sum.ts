function threeSum(nums: number[]): number[][] {
  // sort the array so that smallest numbers are first
  nums.sort((a, b) => a - b);
  const results: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    // create two pointers based on current index and array length
    let j = i + 1;
    let k = nums.length - 1;

    // loop while lower pointer is less than higher pointer
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // conditionally check sum for zero value
      if (sum == 0) {
        // add matching triplet to results
        results.push([nums[i], nums[j], nums[k]]);
        // check to see if the next pointer value is the same
        // and incement if so to avoid duplicate checks
        while (j < k && nums[j] == nums[j + 1]) j++;
        while (j < k && nums[k] == nums[k - 1]) k--;
        j++;
        k--;
        //incrment or decrement pointers based on sum values
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }
  return results;
}
