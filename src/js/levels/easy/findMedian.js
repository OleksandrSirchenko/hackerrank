const findMedian = arr => {
    let pivot = Math.floor(arr.length / 2);

    arr.sort((a, b) => {
        return a - b;
    });
    
    return arr[pivot];
}