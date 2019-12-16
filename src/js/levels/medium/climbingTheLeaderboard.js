function climbingLeaderboard(scores, alice) {
    let result = [];
    let rank;

    let uniqueScores = scores.filter((item, index) => {
        return scores.indexOf(item) === index;
    });

    for (let j in alice) {
        uniqueScores.reverse();
        binaryInsert(alice[j], uniqueScores);
        uniqueScores.reverse();

        rank = uniqueScores.indexOf(alice[j]);
        result.push(rank + 1);
    }

    return result;
}

function binaryInsert(value, array, startVal, endVal){
	var length = array.length;
	var start = typeof(startVal) != 'undefined' ? startVal : 0;
	var end = typeof(endVal) != 'undefined' ? endVal : length - 1;
	var m = start + Math.floor((end - start)/2);
	
	if(length == 0){
		array.push(value);
		return;
	}

	if(value > array[end]){
		array.splice(end + 1, 0, value);
		return;
	}

	if(value < array[start]) {
		array.splice(start, 0, value);
		return;
	}

	if(start >= end) {
		return;
	}

	if(value < array[m]) {
		binaryInsert(value, array, start, m - 1);
		return;
	}

	if(value > array[m]) {
		binaryInsert(value, array, m + 1, end);
		return;
	}
}
