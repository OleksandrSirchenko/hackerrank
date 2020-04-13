const twoStrings = (s1, s2) => {
    const arr = Array.from(s1);

    for (let c of arr) {
        if (s2.includes(c)) {
            return 'YES';
        }
    }
    return 'NO';
}