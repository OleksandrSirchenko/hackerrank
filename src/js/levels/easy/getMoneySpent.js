const getMoneySpent = (keyboards, drives, b) => {
    let max = -1;
    
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j];
            if (sum <= b && sum > max) {
                max = sum;        
            }
        }
    }
    return max;
}
