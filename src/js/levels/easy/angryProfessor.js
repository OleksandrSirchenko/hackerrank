const angryProfessor = (k, a) => {
    let onTime = [];
    for (let time of a) {
        if (time <= 0) {
            onTime.push(time);
        }
    }

    return k > onTime.length ? 'YES' : 'NO';
}
