const catAndMouse = (x, y, z) => {
    const catADist = Math.abs(x - z);
    const catBDist = Math.abs(y - z);
    
    return catADist === catBDist ? 'Mouse C'
        : catADist < catBDist ? 'Cat A'
        : 'Cat B';
}