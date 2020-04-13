const findDigits = n => {
    let count = 0;
    const arr = n.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        if (n % arr[i] === 0) {
            count++;
        }
    }
    return count;
}