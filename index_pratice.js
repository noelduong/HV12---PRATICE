let month = 2;
let number = 2024;
let isEven = number % 4 === 0; // true hoac false
let isEvens = number % 100 === 0;

switch (month) {
  case 2:
    {
      isEven === true && isEvens === false
        ? console.log(`thang 2 co 29 ngay`)
        : console.log(`thang 2 co 28 ngay`);
    }
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    {
      console.log(`Thang ${month} co 31 ngay`);
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    {
      console.log(`Thang ${month} co 30 ngay`);
    }
    break;
  default:
    console.log("Thang khong hop le");
}
