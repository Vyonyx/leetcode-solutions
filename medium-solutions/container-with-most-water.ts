function maxArea(height: number[]): number {
  // Two pointers defined below
  let left = 0;
  let right = height.length - 1;
  let highestArea = 0;

  while (left < right) {
    const xLength = right - left;

    const heightOfContainer = Math.min(height[left], height[right]);
    const area = heightOfContainer * xLength;
    highestArea = Math.max(highestArea, area);

    // shift the pointer with the lowest height one position
    if (height[left] < height[right]) left++;
    else right--;
  }

  return highestArea;
}
