function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr: number[] = [];
    arr.push(...nums1, ...nums2);
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        left++;
        right--;
    }

    const sum = arr[left] + arr[right];
    return sum / 2;
};
