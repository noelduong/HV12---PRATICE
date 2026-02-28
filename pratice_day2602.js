/**function printName(name, phone) {
  console.log(`Hello ${name}, Phone number: ${phone}`);
}
printName("Thầy Sang", "0199299292");
printName("Khang", "0123456789");
printName("Thư", "0987654321");*/
/**const { useCallback } = require("react");

/**function introduce (name, age, location) {
    console.log(` Xin chào, tôi tên là ${name}, năm nay tôi ${age} tuổi. Tôi đang sinh sống ở ${location}. `)
}
introduce("Tuyền", 27, "Hồ Chí Minh")*/

/**function calculateArea(length, width) {
let area = length * width;
return area;
}
console.log(calculateArea(2,5));*/

/**function calcuLatePythagorean(canhGocvuong1, canhGocvuong2) {
    let canhHuyen = Math.sqrt(Math.pow(canhGocvuong1,2) + Math.pow(canhGocvuong2,2))
    return canhHuyen;
} 
console.log(calcuLatePythagorean(3,4));*/

/**const myFunc = function() {
    console.log("Hello J");
}
myFunc();*/

/** Arrow function 
const myFunc = () => {
    console.log("Hello J");
}
myFunc()*/

/**const myFunc = (a, b) => (a + b);
console.log(myFunc(4, 5));*/

/**const caculator = (number1, number2, operator) => {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "*") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else { 
        return "Invalid operator";
    }
    }
    console.log(caculator(2, 4, "*"));
    console.log(caculator(2, 1, "/"))*/

/**const caculator = (number1, number2, operator) => {
    switch (operator) {
        case "+":
        return number1 + number2;
                
        case "-":
        return number1 - number2;
                    
        case "*":
        return number1 * number2;
                        
        case "/":
        return number1 / number2;
                            
        default:
        return "Invalid operator";
        }
    }
    console.log(caculator(2, 4, "*"));
    console.log(caculator(4, 2, "/"))*/

const findDayOfWeek = (day, month, year) => {
  if (month < 1 || month > 12){
    return "Invalid month";
  }
  let maxday = 31
  if (month ===4 || month === 6 || month === 9 || month === 11) {
    maxday = 30
  }
  if (month === 2) {
    maxday = 28
  }
  if ( day < 1 || day > maxday) {
    return "Invalid day";
  }
  const d = new Date(year, month -1 , day).getDay();
  if (d === 0) return "Sunday";
    if (d === 1) return "Monday";
    if (d === 2) return "Tuesday";
    if (d === 3) return "Wednesday";
    if (d === 4) return "Thursday";
    if (d === 5) return "Friday";
    if (d === 6) return "Saturday";
}
console.log(findDayOfWeek(4, 8, 2023));