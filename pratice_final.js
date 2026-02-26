/**let time = 31
const halfTime = Math.floor(time / 2)
while (time >0) {

    if (time === halfTime) {
        console.log("Đã qua nửa thời gian!")
    } else {
        console.log(`Còn ${time}giây nữa!`)
    }
    time--
}
console.log("Đã hết thời gian!")*/

/**const numOforder = 5
let total = 0 
for (let i = 1; i <= numOforder; i++) {
    const price = Math.floor(Math.random() * (5_000_000 - 1_000_000 + 1)) + 1_000_000
    total += price
    console.log(`Đơn hàng ${i}: ${price.toLocaleString()} VND`)
}
console.log(`Tổng tiền phải trả: ${total.toLocaleString()} VND`)*/

/**let price = Math.floor(Math.random() * (5_000_000 - 1_00_000 + 1)) + 1_00_000;
let hasDiscount = Math.round(Math.random());
if (hasDiscount === 1) {
  let discountPercent = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  let discountAmount = price - discountPercent / 100;
  let finalPrice = price - discountAmount;
  console.log(`Gía gốc: ${price}`);
  console.log(`Giảm giá: ${discountPercent}%`);
  console.log(`Giá sau khi giảm: ${finalPrice.toLocaleString()} VND`);
} else {
  console.log(`Gia goc: ${price.toLocaleString()} VND`);
  console.log("Không có giảm giá!");
}*/

/**let n = Math.floor(Math.random() * (10 - 1 + 1)) + 1
console.log(n)*/

/**let n = Math.floor(Math.random() * (20 - 1 +1)) + 1
if ( n % 2 === 0) {
    console.log(`${n} là số chẵn`)
} else {console.log(`${n} là số lẻ`)
}*/

/**let n = Math.floor(Math.random() * (1_000_000 - 100_000 + 1)) + 100_000
let disCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10 
let finalPrice = n - (n * disCount / 100)

console.log(`Giá gốc: ${n.toLocaleString()} VNĐ`)
console.log(` Giảm giá: ${disCount}%`)
console.log(` Giá sau khi giảm: ${finalPrice.toLocaleString()} VNĐ`)*/

function printName(name) {
    console.log(`Hello ${name}`)
}
printName("Thầy Sang")
printName("Khang")
printName("Thư")