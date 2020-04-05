const sockMerchant = (n, arr) => {
    let count = 0;

    arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count = count + 1;
            i += 1;
        }
    }
    return count;
}
