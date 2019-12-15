function birthdayCakeCandles(ar) {
    let itr = 1;
      ar.sort((a, b) => {
        return a - b;
      }).reverse();

    for (let candle in sortedArr) {
        if (sortedArr[candle] < sortedArr[candle - 1]) {
          return itr;
        } else if (sortedArr[candle] === sortedArr[candle - 1]) {
          itr++;
        }
    }

    return itr;
}
