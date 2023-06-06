function twoSum(numbers: number[], target: number): number[] {
  const twoSumIdx: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const nextNum = numbers[j];
      if (num + nextNum === target) {
        twoSumIdx.push(i + 1);
        twoSumIdx.push(j + 1);
        return twoSumIdx;
      }
    }
  }

  return twoSumIdx;
}
