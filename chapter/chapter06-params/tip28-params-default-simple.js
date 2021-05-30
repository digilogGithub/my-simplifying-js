const roundToDecimalPlace = (number, decimalPlaces) => {
    const round = 10 ** decimalPlaces;
    return Math.round(number * round) / round;
}

/*// basic
function convertWeight(weight) {
    return weight / 2.2;
}*/

/*// add ounces
function convertWeight(weight, ounces) {
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    return total / 2.2;
}*/

/*// add round
const convertWeight = (weight, ounces, roundTo) => {
    const oz = ounces / 16 || 0;
    const total = weight + oz
    const conversion = total / 2.2
    const round = roundTo === undefined ? 2 : roundTo
    return roundToDecimalPlace(conversion, round)
};*/


// 매개변수 기본값을 사용하면 특정한 자료형이 필요하다는 단서 역시 제공함
const convertWeight = (weight, ounces = 0, roundTo = 2) => {
    const total = weight + (ounces / 16)
    const conversion = total / 2.2
    return roundToDecimalPlace(conversion, roundTo)
};


console.log(convertWeight(44, 11, 5))
console.log(convertWeight(6, 6))

// 기본값 사용에 주의 할 점은 undefined 는 적용되나 null 의 경우에는 기본값을 적용하지 않는다.
console.log(convertWeight(6, 6, undefined))
console.log(convertWeight(6, 6, null))


// conclusion
// 기본값 사용에서 순서가 여전히 중요하다는 것을 염두해 두어야 한다.
// 이 문제를 우회하는 방법으로는 매개변수로 객체를 전달하는 것이다
