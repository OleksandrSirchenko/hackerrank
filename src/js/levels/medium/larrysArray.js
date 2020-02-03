const larrysArray = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    
    if (count % 2) {
        return 'NO';
    }
    return 'YES';
}
