const chocolateFeast = (n, c, m) => {
    let chocolateCount = Math.floor(n / c);
    let bars = chocolateCount;

    if (chocolateCount < m) {
        return chocolateCount;
    }

    while (bars >= m) {
        let tmpChoco = Math.floor(bars / m);
        chocolateCount += tmpChoco;
        bars -= m * tmpChoco;
        bars += tmpChoco;
    }

    return chocolateCount; 
}