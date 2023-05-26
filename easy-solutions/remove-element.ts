// This algorithm requires  an in-place sort of the input array. The sort needs
// to place all the numbers that don't match towards the start of the array, and
// then return a number that indicates the number of values that don't match.
// This number is then used to evaluate the sorted array during the test to see
// if the sort condition has been met.

function removeElement(nums: number[], val: number): number {
  // Number of array items that do not match the 'val' input
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // If it's a match, change the number to something else (optional)
    if (nums[i] === val) {
      nums[i] = NaN;
      // If the number is not a match, swap it with the last known position of the sorted array
      // that matches the sort condition.
    } else {
      const tmp = nums[i];
      nums[i] = nums[k];
      nums[k] = tmp;

      // Increment this variable as the last known position of the sort and
      // a count of the non-matching values in the array
      k++;
    }
  }
  return k;
}
