const pickingNumbers = a => {
    let max = 0;
    let arr = new Array(100);
    arr.fill(0);
    
    for (let i = 0; i < a.length; i++) {
        arr[a[i]] += 1;
    }

    for (let j = 0; j < arr.length - 1; j++) {
        max = Math.max(max, arr[j] + arr[j + 1]);
    }

    return max;
}
