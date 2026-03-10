const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nva@company.com",
    phoneNumber: "0901234567",
    gender: "Male",
    position: "Developer",
    salary: 2000,
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: null,
    phoneNumber: "0912345678",
    gender: "Female",
    position: "Tester",
    salary: 1200,
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "lvc@company.com",
    phoneNumber: null,
    gender: "Male",
    position: "Developer",
    salary: 1800,
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: null,
    phoneNumber: null,
    gender: "Female",
    position: "HR",
    salary: 1000,
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hve@company.com",
    phoneNumber: "0934567890",
    gender: "Male",
    position: "Manager",
    salary: 3500,
  },
];

/**const employeesOffical = employees.filter((employee) => {
    return employee.email || employee.phoneNumber
}
)
console.log(employeesOffical)*/

const filterEmployees = employees.filter((employee) => {
    const {email, phoneNumber} = employee
    return email || phoneNumber
})

/*const newInfo = filterEmployees.map((employee) => {
    const {email, id, position} = employee;
    if (!email) {
    return {...employee,
       email: `${id}_${position.toLowerCase()}@gmail.com`}
    }
    return employee
})
console.log(newInfo)*/

const updateMail = filterEmployees.map((employee) => {
    const {email, id, position} = employee
    return email
    ?employee
    : { ...employee,
        email: `${id}_${position.toLowerCase()}@gmail.com`}
    }
)
console.log(updateMail)