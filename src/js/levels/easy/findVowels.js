const findVowels = str => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    VOWELS.forEach(vowel => {
        if (str.toLowerCase().includes(vowel)) {
            count++;
        }
    });

    return count;
}
