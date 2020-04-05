const libraryFine = (d1, m1, y1, d2, m2, y2) => {
    const withinDay = 15;
    const withinMonth = 500;
    const withInYear = 10000;
    let fine = 0;

    if (d1 > d2 && m1 === m2 && y1 === y2) {
        return fine = withinDay * (d1 - d2);
    } else if (m1 > m2 && y1 === y2) {
        return fine = withinMonth * (m1 - m2);
    } else if (y1 > y2) {
        return fine = withInYear;
    } else {
        return fine;
    }
}
