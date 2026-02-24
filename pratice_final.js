let totaltime = 30
let time = totaltime
while (time >0) {
    let elapsed = totaltime - time
    
    if (elapsed === time) {
        console.log("Đã qua nửa thời gian!")
    } else {
        console.log(`Còn ${time} giây nữa!`)
    }
    time--
}
console.log("Đã hết thời gian!")