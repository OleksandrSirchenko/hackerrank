function howManyGames(p, d, m, s) {
    let gamesCount;
    let sum = 0;

    for (gamesCount = -1; gamesCount <= s; gamesCount++) {
        if (p < s && sum <= s) {
            p > m ? (sum += p, p -= d)
                : sum += m;
        } else if (p > s) {
            return gamesCount = 0;
        } else {
            return gamesCount;
        }
    }
}
