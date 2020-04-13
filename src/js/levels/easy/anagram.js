const anagram = s => {
    let right = s.substring(0, s.length / 2), 
        left = s.substring(right.length, s.length);

    if (s.length % 2 !== 0) {
        return -1;
    }

    for (let i in left) {
        if (right.includes(left[i])) {
            right = right.replace(left[i], '');
        }
    }
    return right.length;
}