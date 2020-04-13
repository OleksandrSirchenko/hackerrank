const closestNumbers = arr => {
    let res = [];
    let diff = Math.pow(10, 7) * 2;

    arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
        diff = Math.min(diff, Math.abs(arr[i + 1] - arr[i]));
    }

    for (let j = 0; j < arr.length - 1; j++) {
        if (Math.abs((arr[j + 1] - arr[j])) === diff) {
            res.push(arr[j]);
            res.push(arr[j + 1]);
        }
    }
    return res;
}