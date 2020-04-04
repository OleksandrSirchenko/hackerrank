const workbook = (n, k, arr) => {
    let page = 1;
    let count = 0;

    for (let a of arr) {
        for (let i = 1; i <= a; i++) {
            if (i === page) count++;
            if (i % k === 0) page++;
        }
        if (a % k !== 0) page++;
    }

    return count;
}
