const utopianTree = n => {
    let height = 1;

    if (n % 2 === 0) {
        height = (Math.pow(2, n / 2) - 1) * 2 + 1;
    } else {
        height = (Math.pow(2, Math.floor(n / 2) + 1) - 1) * 2; 
    }

    return Math.round(height);
}

console.log(utopianTree(1));