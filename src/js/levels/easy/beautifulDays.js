const beautifulDays = (i, j, k) => {
    let count = 0;

    for (let x = i; x <= j; x++) {
        let reversedDay = x.toString().split('').reverse().join('');

        if ((x - reversedDay) % k === 0) {
            count++;        
        }
    }
    return count;
}
