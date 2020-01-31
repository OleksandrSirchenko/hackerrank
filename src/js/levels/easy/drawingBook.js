const pageCount = (pages, target) => {
    let pivot = pages / 2,
        pagesTurn;

    if (pivot >= target) {
        return pagesTurn = Math.floor(target / 2);
    }

    if (pages % 2 !== 0) {
        pages -= 1;
    }
    
    return pagesTurn = Math.round((pages - target) / 2);
}