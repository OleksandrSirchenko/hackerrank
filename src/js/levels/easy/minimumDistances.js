const minimumDistances = a => {
    let res = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                res.push(j - i);
            }
        }
    }

    if (res.length === 0) {
        return -1;
    }
    return Math.min(...res);
}