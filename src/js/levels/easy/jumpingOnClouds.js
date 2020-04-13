const jumpingOnClouds = c => {
    let count = 0,
        zeroCount = 0;    

    for (let i in c) {
        if (c[i] === 0) {
            zeroCount++;
        } else {
            count++;
            zeroCount = 0;
        }

        if (zeroCount >= 2) {
            count++;
        }

        if (zeroCount === 3) {
            count--;
            zeroCount = 1;
        }
    }
    return count;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0]));