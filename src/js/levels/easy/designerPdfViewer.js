function designerPdfViewer(h, word) {
    const heights = [];
    const alphabetPosition = char => char.charCodeAt() - 97;

    Array.from(word).forEach(c => {
        let position = alphabetPosition(c);
        heights.push(h[position]);
    });

    return Math.max(...heights) * word.length;
} 