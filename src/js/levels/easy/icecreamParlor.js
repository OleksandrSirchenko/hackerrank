const icecreamParlor = (m, arr) => {
    let result = [];
    let sum;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (i !== j) {
                sum = arr[i] + arr[j];
                if (sum === m) {
                    result.push(i + 1);
                    result.push(j + 1);
                }
            }
        }
    }
    return result;
}