function groupAnagrams(strs: string[]): string[][] {
    // The algorithm creates an object that groups the words
    const groups = strs.reduce<{[key: string]: string[]}>((acc, s) => {
        // The key (string) for each grouping (string array) is a sorted string of the each word
        // The sorted key allows for easier comparison for each word
        const sortedStr = Array.from(s).sort().join('');
        if (acc[sortedStr] === undefined) acc[sortedStr] = [s];
        else acc[sortedStr].push(s);
        return acc;
    }, {})

    // Finally, only the values are returned (string[][])
    return Object.values(groups);
};
