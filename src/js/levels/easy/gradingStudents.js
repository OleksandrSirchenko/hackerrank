function gradingStudents(grades) {
    function _roundToFive(x) {
        return Math.ceil(x/5) * 5;
    }

    for (let grade in grades) {
        let diff = _roundToFive(grades[grade]) - grades[grade];

        if (diff < 3 && grades[grade] > 37) {
          grades[grade] = _roundToFive(grades[grade]);
        }
    }

    return grades;
}
