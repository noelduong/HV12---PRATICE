//const numbers = [1, 2, 3, 4, 5];

//1. forEach
//numbers.forEach((number, index) => {
   // console.log(`${number} - ${index}`)
//});

//const localInVietNam = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ"];
//localInVietNam.forEach((local, index) => {
   // console.log(`${local} - ${index}`)
//})

//const count = [1, 2, 3, 4, 5];
//2. Filter
//const filteredCount = count.filter((number, index) => {
   // return number > 3;
//})
//console.log(filteredCount);//

/**const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const evenNumbers = numbers.filter((number) => {
       return number % 2 === 0
    })
console.log(evenNumbers)*/

//3. Some
/**const hasEvenNumber = numbers.some((number) => {
    console.log(number);
    return number % 2 === 0
})
console.log(hasEvenNumber)*/

//4. Every

/**const isAllodd = numbers.every((number) => {
    return number % 2 !== 0
})
console.log(isAllodd)*/

/**const scores = [2, 5, 7, 5, 10, 9, 8, 6, 4, 3];
const hasLowScores = scores.some((score) => {
   console.log(score);
    return score < 5
})
const allPass = scores.every((score) => {
    return score >= 5
})
if(hasLowScores) {
    console.log("có điểm dưới trung bình trong danh sách điểm")
} else {    console.log("không có điểm dưới trung bình trong danh sách điểm")
}
if(allPass) {
    console.log("tất cả điểm đều đạt yêu cầu trong danh sách điểm")
} else {    console.log("không phải tất cả điểm đều qua môn trong danh sách điểm")
}   */

/**5. Map
 * const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
    return number * 2;
})
console.log(newNumbers);*/

/**const scoresClassA = [1, 5, 6, 3, 6, 3, 7, 10, 9, 8];
const scoresFixed = scoresClassA.map((score) => {
    if(score <10) {
        return score + 1
    } else {
        return score
    }
})
console.log(scoresFixed)*/

/**6. Reduce */
const numbers = [1, 2, 3, 4, 5];
 const result = numbers.reduce((preValue, currentValue) => {
    console.log(`${preValue} - ${currentValue}`)
    return preValue + currentValue
 }, 0)
console.log(result)