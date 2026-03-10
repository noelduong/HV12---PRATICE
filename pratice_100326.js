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
  {
    id: 6,
    name: "Ngô Thị F",
    email: "ntf@company.com",
    phoneNumber: null,
    gender: "Female",
    position: "Designer",
    salary: 1500,
  },
  {
    id: 7,
    name: "Vũ Văn G",
    email: null,
    phoneNumber: "0956789012",
    gender: "Male",
    position: "Developer",
    salary: 2200,
  },
  {
    id: 8,
    name: "Đặng Thị H",
    email: "dth@company.com",
    phoneNumber: "0967890123",
    gender: "Female",
    position: "Tester",
    salary: 1300,
  },
  {
    id: 9,
    name: "Bùi Văn I",
    email: null,
    phoneNumber: null,
    gender: "Male",
    position: "HR",
    salary: 1100,
  },
  {
    id: 10,
    name: "Đoàn Thị J",
    email: "dtj@company.com",
    phoneNumber: "0989012345",
    gender: "Female",
    position: "Manager",
    salary: 3200,
  },
  {
    id: 11,
    name: "Trương Văn K",
    email: "tvk@company.com",
    phoneNumber: "0990123456",
    gender: "Male",
    position: "Developer",
    salary: 1900,
  },
  {
    id: 12,
    name: "Lý Thị L",
    email: null,
    phoneNumber: "0909876543",
    gender: "Female",
    position: "Designer",
    salary: 1600,
  },
  {
    id: 13,
    name: "Mai Văn M",
    email: "mvm@company.com",
    phoneNumber: null,
    gender: "Male",
    position: "Tester",
    salary: 1400,
  },
  {
    id: 14,
    name: "Phan Thị N",
    email: "ptn@company.com",
    phoneNumber: "0923456789",
    gender: "Female",
    position: "HR",
    salary: 1050,
  },
  {
    id: 15,
    name: "Trịnh Văn O",
    email: null,
    phoneNumber: "0945678901",
    gender: "Male",
    position: "Developer",
    salary: 2500,
  },
  {
    id: 16,
    name: "Lâm Thị P",
    email: "ltp@company.com",
    phoneNumber: null,
    gender: "Female",
    position: "Manager",
    salary: 3000,
  },
  {
    id: 17,
    name: "Đào Văn Q",
    email: null,
    phoneNumber: "0965432109",
    gender: "Male",
    position: "Designer",
    salary: 1700,
  },
  {
    id: 18,
    name: "Đinh Thị R",
    email: "dtr@company.com",
    phoneNumber: "0987654321",
    gender: "Female",
    position: "Tester",
    salary: 1250,
  },
  {
    id: 19,
    name: "Tôn Văn S",
    email: null,
    phoneNumber: null,
    gender: "Male",
    position: "Developer",
    salary: 2100,
  },
  {
    id: 20,
    name: "Châu Thị T",
    email: "ctt@company.com",
    phoneNumber: "0912349876",
    gender: "Female",
    position: "HR",
    salary: 1150,
  },
];

/**const employeesOffical = employees.filter((employee) => {
    return employee.email || employee.phoneNumber
}
)
console.log(employeesOffical)*/

const filterEmployees = employees.filter((employee) => {
  const { email, phoneNumber } = employee;
  return email || phoneNumber;
});

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
  const { email, id, position } = employee;
  return email
    ? employee
    : { ...employee, email: `${id}_${position.toLowerCase()}@gmail.com` };
});
console.log(updateMail);

/*const newInfo = employees
    .filter(employee => employee.email || employee.phoneNumber)
    .map(employee => {
        const {id, position} = employee
        return !employee.email
        ? {...employee,
            email: `${id}_${position.toLowerCase()}@gmail.com`
        }
        : employee
    })
console.log(newInfo)*/

const averageSalary =
  updateMail.reduce((sum, employee) => {
    return sum + employee.salary;
  }, 0) / updateMail.length;
console.log(averageSalary);
