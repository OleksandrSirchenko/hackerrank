const equalizeArray = arr => {
    let count = -1, j = 0;

    arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            count++;
        }
    }
    return count;
}
