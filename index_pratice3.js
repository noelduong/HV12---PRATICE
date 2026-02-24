let isLeapyear = 2025
let isEven = isLeapyear % 4 === 0; // true hoac false
let isEvens = isLeapyear % 100 === 0;

isEven === true && isEvens === false
        ? console.log(`thang 2 co 29 ngay`)
        : console.log(`thang 2 co 28 ngay`);