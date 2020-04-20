const viralAdvertising = n => {
    let people = 5;
    let camulative = 2;
    let shared = people;

    for (let i = 2; i <= n; i++) {
        shared = Math.floor(shared / 2) * 3;
        camulative += Math.floor(shared / 2);
    }
    return camulative;
}
