const countingValleys = (n, s) => {
    let start = n;
    let count = 0;

    for (let step of s) {
        if (step === 'D') {
            if (start === n) count++;
            n -= 1;
        } else {
            n += 1;
        }
    }

    return count;
}
