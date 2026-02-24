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

const numOforder = 5
let total = 0 
for (let i = 1; i <= numOforder; i++) {
    const price = Math.floor(Math.random() * (5_000_000 - 1_000_000 + 1)) + 1_000_000
    total += price
    console.log(`Đơn hàng ${i}: ${price.toLocaleString()} VND`)
}
console.log(`Tổng tiền phải trả: ${total.toLocaleString()} VND`)