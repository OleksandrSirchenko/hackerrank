const migratoryBirds = arr => {
    let birds = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    for (let bird in birds) {
        for (let i of arr) {
            if (i == bird) {
                birds[bird]++;
            }
        }
    }

    return Object.keys(birds).reduce((b, a) => birds[a] > birds[b] ? a : b);
}