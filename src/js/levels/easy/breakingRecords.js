const breakingRecords = scores => {
    let min = scores[0], max = scores[0];
    let most = 0, least = 0;
    let count;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            least++;
        }
        if (scores[i] > max) {
            max = scores[i];
            most++;
        }
    }
    return count = [most, least];
}
