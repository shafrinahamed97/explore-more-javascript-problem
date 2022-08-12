function radianToDegree(radian) {

    if (typeof radian === "string") {
        return 'Please! Give an Integer Or Float value'

    }
    else {
        const degree = radian * 57.2958;
        return parseFloat(degree.toFixed(2));
    }
}

const inputRadiun = '2';
const resultDegree = radianToDegree(inputRadiun);
console.log(resultDegree);