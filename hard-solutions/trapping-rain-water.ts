function trap(height: number[]): number {
  const getContainerLowerBound = (): number => {
    let idx = 0;
    while (height[idx] < height[idx + 1]) idx++;
    return idx;
  };

  const getContainerUpperBound = (): number => {
    let idx = height.length - 1;
    while (height[idx] < height[idx - 1]) idx--;
    return idx;
  };

  height = height.slice(getContainerLowerBound(), getContainerUpperBound() + 1);

  let totalVolume = 0;
  let left = 0;
  let right = left + 1;

  while (left < height.length - 1) {
    if (height[left] === height[right] && right === left + 1) {
      left = right;
      right = right + 1;
    }

    const rightHeights: number[] = [height[right]];
    while (height[left] > height[right] && right < height.length - 1) {
      right++;
      rightHeights.push(height[right]);
    }

    if (right === height.length - 1) {
      const maxHeight = Math.max(...rightHeights);
      right = height.lastIndexOf(maxHeight);
    }

    // calculate
    const containerHeight = Math.min(height[left], height[right]);
    let containerTotal = 0;

    for (let i = left + 1; i < right; i++) {
      const vol = Math.max(containerHeight - height[i], 0);
      containerTotal += vol;
    }

    totalVolume += containerTotal;
    left = right;
    right = left + 1;
  }
  return totalVolume;
}
