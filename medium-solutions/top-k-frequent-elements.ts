type Counts = {
    [key: number]: number
}

function topKFrequent(nums: number[], k: number): number[] {
    const counts = nums.reduce<Counts>((acc, n) => {
        if (acc[n] === undefined) acc[n] = 0;
        acc[n] = acc[n] += 1;
        return acc;
    }, {})

    const frequent = Object
        .entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => Number(entry[0]));
    
    return frequent;
}
