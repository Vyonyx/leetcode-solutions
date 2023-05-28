 function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    s = s.toLowerCase().split('').sort().join('');
    t = t.toLowerCase().split('').sort().join('');

    return s == t;
};
