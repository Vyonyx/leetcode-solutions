/*
 * The commented code is my first solution and is less performant.

 function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    s = s.toLowerCase().split('').sort().join('');
    t = t.toLowerCase().split('').sort().join('');

    return s == t;
};
*/

type HashMap = {
    [key: string]: number;
}

const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    const hashmap: HashMap = {}

    for (let ch of s) {
        if (hashmap[ch]) {
            hashmap[ch]++;
        } else {
            hashmap[ch] = 1;
        }
    }

    for (let ch of t) {
        if (hashmap[ch]) {
            hashmap[ch]--;
        } else {
            return false;
        }
    }

    return true;
};
