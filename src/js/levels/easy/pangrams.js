const pangrams = s => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let c of alphabet) {
        if (s.toLowerCase().includes(c)) {
            continue;
        } else {
            return 'not pangram';
        }
    }
    return 'pangram';
}