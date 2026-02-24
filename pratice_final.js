let time = 31
const halfTime = Math.floor(time / 2)
while (time >0) {

    if (time === halfTime) {
        console.log("Đã qua nửa thời gian!")
    } else {
        console.log(`Còn ${time} giây nữa!`)
    }
    time--
}
console.log("Đã hết thời gian!")