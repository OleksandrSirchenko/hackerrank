const hurdleRace = (k, height) => {
    let maxHeight = Math.max(...height);

    if (maxHeight > k) {
        return maxHeight - k;
    }
    return 0;
}
