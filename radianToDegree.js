function radianToDegree(radian) {
    const degree = radian * 57.2958;
    return parseFloat(degree.toFixed(2));
}

const inputRadiun = 2;
const resultDegree = radianToDegree(inputRadiun);
console.log(resultDegree);

