const employees = [];
const prompt = require("prompt-sync")();

let number = Number(prompt("Nhập số lượng nhân viên muốn tạo:"));

for (let i = 0; i < number; i++) {
  const name = prompt("Nhập tên: ");
  const email = prompt("Nhập mail: ");
  const phoneNumber = prompt("Nhập số điện thoại: ");
  const gender = prompt("Nhập giới tính: ");
  const position = prompt("Nhập vị trí: ");
  const salary = Number(prompt("Nhập lương: "));

  const employee = {
    id: i + 1,
    name,
    email,
    phoneNumber,
    gender,
    position,
    salary,
  };

  employees.push(employee);
}

console.log(employees);

let choice;

while (true) {
  console.log("\n===== MENU =====");
  console.log("1. In danh sách nhân viên");
  console.log("2. Tìm nhân viên theo ID");
  console.log("3. Tìm nhân viên theo tên");
  console.log("4. Sửa thông tin nhân viên");
  console.log("5. Tìm tương đối theo tên");
  console.log("0. Thoát");

  choice = Number(prompt("Nhập lựa chọn: "));

  if (choice === 1) {
    if (employees.length === 0) {
      console.log("Danh sách nhân viên đang trống");
    } else {
      console.table(employees);
    }
  } else if (choice === 2) {
    let id = Number(prompt("Nhập ID nhân viên: "));
    const employee = employees.find((e) => e.id === id);

    if (!employee) {
      console.log("Không tìm thấy nhân viên");
    } else {
      console.table([employee]);
    }
  } else if (choice === 3) {
    let name = prompt("Nhập tên cần tìm: ").toLowerCase();

    const employee = employees.find((e) => e.name.toLowerCase() === name);

    if (!employee) {
      console.log("Không tìm thấy nhân viên");
    } else {
      console.table([employee]);
    }
  } else if (choice === 4) {
    let id = Number(prompt("Nhập ID nhân viên cần sửa: "));
    const employee = employees.find((e) => e.id === id);

    if (!employee) {
      console.log("Không tìm thấy nhân viên");
      continue;
    }

    employee.name = prompt("Tên mới: ");
    employee.email = prompt("Email mới: ");
    employee.phoneNumber = prompt("SĐT mới: ");
    employee.gender = prompt("Giới tính mới: ");
    employee.position = prompt("Vị trí mới: ");
    employee.salary = Number(prompt("Lương mới: "));

    console.log("Cập nhật thành công");
  } else if (choice === 5) {
    let keyword = prompt("Nhập tên cần tìm: ").toLowerCase();

    const result = employees.filter((e) =>
      e.name.toLowerCase().includes(keyword),
    );

    if (result.length === 0) {
      console.log("Không tìm thấy nhân viên");
    } else {
      console.table(result);
    }
  } else if (choice === 0) {
    console.log("Thoát chương trình");
    break;
  } else {
    console.log("Lựa chọn không hợp lệ");
  }
}
