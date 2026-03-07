const employees = []
const prompt = require("prompt-sync")()

let number = Number(prompt("Nhập số lượng nhân viên muốn tạo:"))

for (let i = 0; i < number; i++) {

    const name = prompt("Nhập tên: ")
    const email = prompt("Nhập mail: ")
    const phoneNumber = prompt("Nhập số điện thoại: ")
    const gender = prompt("Nhập giới tính: ")
    const position = prompt("Nhập vị trí: ")
    const salary = Number(prompt("Nhập lương: "))

    const employee = {
        id: i + 1,
        name,
        email,
        phoneNumber,
        gender,
        position,
        salary
    }

    employees.push(employee)
}

console.log(employees)