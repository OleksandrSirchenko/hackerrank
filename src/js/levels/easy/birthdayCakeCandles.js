function birthdayCakeCandles(ar) {
    let itr = 1;

    ar.sort((a, b) => {
        return b - a;
    });

    for (let candle in ar) {
        if (ar[candle] < ar[candle - 1]) {
            return itr;
        } else if (ar[candle] === ar[candle - 1]) {
            itr++;
        }
    }

    return itr;
}
