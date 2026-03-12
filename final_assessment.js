/*Bài tập 1
Bối cảnh: Lab cần một hàm kiểm tra xem một yêu cầu mượn thiết bị (ví dụ: Arduino, Raspberry
Pi) có hợp lệ hay không. Yêu cầu: Viết một hàm checkBorrowRequest(deviceName, quantity,
availableStock) nhận vào 3 tham số.
 Nếu số lượng yêu cầu (quantity) lớn hơn số lượng đang có sẵn (availableStock), in ra màn
hình: &quot;Yêu cầu từ chối: Không đủ thiết bị [deviceName].&quot;.
 Nếu số lượng yêu cầu nhỏ hơn hoặc bằng 0, in ra: &quot;Yêu cầu không hợp lệ.&quot;.
 Nếu hợp lệ, in ra: &quot;Đã duyệt mượn [quantity] [deviceName].&quot;.
Input Output
checkBorrowRequest(“Arduino”, 5, 2) “Yêu cầu từ chối: Không đủ thiết bị Arduino”
checkBorrowRequest(“Sensor”, -1, 10) “Yêu cầu không hợp lệ”
checkBorrowRequest(“Raspberry Pi”, 2, 5) “Đã duyệt mượn 2 Raspberry Pi”*/

function checkBorrowRequest(deviceName, quantity, avalableStock) {
  if (quantity > avalableStock)
    console.log(` Yêu cầu bị từ chối: Không đủ thiết bị ${deviceName}`);
  else if (quantity <= 0) console.log("Yêu cầu không hợp lệ!");
  else {
    console.log(`Đã duyệt mượn ${quantity} ${deviceName}.`);
  }
}
checkBorrowRequest("Arduino", 5, 2);
checkBorrowRequest("Sensor", -1, 10);
checkBorrowRequest("Raspberry Pi", 2, 5);

/*Bài tập 2: Thống kê thời gian nghiên cứu
Bối cảnh: Mỗi cuối tuần, hệ thống sẽ tổng hợp số giờ code/nghiên cứu của một thành viên trong
suốt 7 ngày. Yêu cầu: Cho một mảng lưu số giờ làm việc: const workHours = [2, 4, 0, 5, 3, 6, 2];
1. Viết một hàm tính tổng số giờ làm việc trong tuần bằng cách sử dụng vòng lặp for hoặc
for...of.
2. Mở rộng hàm: Nếu ngày nào làm việc từ 5 giờ trở lên, in ra thông báo: &quot;Ngày thứ [i + 1] làm
việc rất năng suất!&quot;.*/

const workHours = [2, 4, 0, 5, 3, 6, 2];
let total = 0;
for (let i = 0; i < workHours.length; i++) {
  total += workHours[i];
  if (workHours[i] >= 5) {
    console.log(`Ngày thứ ${i + 1} làm việc rất năng suất!`);
  }
    }
    console.log("Tổng số giờ làm việc:", total);


/*Bài tập 3: Chuẩn hóa dữ liệu dự án
Bối cảnh: Khi lấy dữ liệu từ server về, tên các dự án đôi khi không viết hoa chữ cái đầu. Yêu
cầu: Cho danh sách các dự án sau:
1. const projects = [
2. { id: 1, name: &quot;smart home&quot;, status: &quot;completed&quot; },
3. { id: 2, name: &quot;auto watering&quot;, status: &quot;in-progress&quot; },
4. { id: 3, name: &quot;weather station&quot;, status: &quot;planned&quot; },
5. { id: 4, name: &quot;leetcode clone platform&quot;, status: &quot;in-progress&quot; },
6. { id: 5, name: &quot;excode landing page&quot;, status: &quot;completed&quot; },
7. { id: 6, name: &quot;custom mechanical keyboard&quot;, status: &quot;planned&quot; },
8. { id: 7, name: &quot;ai face recognition&quot;, status: &quot;in-progress&quot; },
9. { id: 8, name: &quot;smart traffic light&quot;, status: &quot;completed&quot; },
];
10. Sử dụng map() để tạo ra một mảng mới, trong đó tên của tất cả các dự án đều được viết
hoa toàn bộ (ví dụ: &quot;SMART HOME&quot;).
11. Sử dụng filter() để lấy ra một mảng chỉ chứa các dự án đang thực hiện (status là &quot;in-
progress&quot;).*/

const projects = [
    { id: 1, name: "smart home", status: "completed" },
    { id: 2, name: "auto watering", status: "in-progress"},
    { id: 3, name: "weather station", status: "planned" },
    { id: 4, name: "leetcode clone platform", status: "in-progress"},
    { id: 5, name: "excode landing page", status: "completed"},
    { id: 6, name: "custom mechanical keyboard", status: "planned"},
    { id: 7, name: "ai face recognition", status: "in-progress" },
    { id: 8, name: "smart traffic light", status: "completed"},
];
const upperProjets = projects.map((project) => {
    return {
        ...project,
        name: project.name.toUpperCase(),
        status: project.status.toUpperCase()
    }
});
    console.log(upperProjets)

const filterProjects = projects.filter((project) => {
    return project.status = "in-progress"
})
    console.log(filterProjects)

/*Bài tập 4: Tổng hợp điểm số
Bối cảnh: Sau các bài test kỹ năng, mỗi học viên sẽ có một bảng điểm cho từng phần (Git,
HTML/CSS, JS). Yêu cầu: Cho mảng kết quả sau:
1. const examResults = [
2. { skill: &quot;Git/GitHub&quot;, score: 8.0 },
3. { skill: &quot;HTML/CSS&quot;, score: 9.0 },
4. { skill: &quot;JavaScript&quot;, score: 7.5 },
5. { skill: &quot;ReactJS&quot;, score: 8.5 },
6. { skill: &quot;NodeJS&quot;, score: 7.0 },
7. { skill: &quot;Docker&quot;, score: 6.5 },
8. { skill: &quot;Python&quot;, score: 8.0 },
9. { skill: &quot;Machine Learning&quot;, score: 7.5 },
];

10. ];Chỉ sử dụng phương thức reduce(), hãy viết đoạn code tính điểm trung bình của cả 3 kỹ
năng trên.
11. Trả về kết quả đã được làm tròn đến 1 chữ số thập phân.*/


const examResults = [
    { skill: "Git/GitHub", score: 8.0 },
    { skill: "HTML/CSS", score: 9.0 },
    { skill: "JavaScript", score: 7.5 },
    { skill: "ReactJS", score: 8.5 },
    { skill: "NodeJS", score: 7.0 },
    { skill: "Docker", score: 6.5 },
    { skill: "Python", score: 8.0 },
    { skill: "Machine Learning", score: 7.5 }
];
const targetSkills = ["Git/GitHub", "HTML/CSS", "JavaScript"]
    const selectedSkills = examResults.filter(project => 
    targetSkills.includes(project.skill)
)
const avgScore = ( selectedSkills.reduce((sum, project) =>
    sum + project.score,0) / selectedSkills.length).toFixed(1)
    console.log(avgScore)

/*Bài tập 5: Thiết kế bộ lọc thành viên
Bối cảnh: ExCode đang cần tìm các bạn có định hướng làm Web (Frontend/Backend) để ghép
vào một nhóm dự án mới. Yêu cầu: Cho mảng danh sách các bạn đăng ký:
1. const candidates = [
2. { name: &quot;An&quot;, skills: [&quot;C++&quot;, &quot;Python&quot;], role: &quot;AI&quot; },
3. { name: &quot;Bình&quot;, skills: [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;], role: &quot;Frontend&quot;
},
4. { name: &quot;Châu&quot;, skills: [&quot;NodeJS&quot;, &quot;MongoDB&quot;], role: &quot;Backend&quot; },
5. { name: &quot;Dương&quot;, skills: [&quot;Python&quot;, &quot;TensorFlow&quot;], role: &quot;AI&quot; },
6. { name: &quot;Trung&quot;, skills: [&quot;HTML&quot;, &quot;CSS&quot;, &quot;ReactJS&quot;], role: &quot;Frontend&quot;
},
7. { name: &quot;Thảo&quot;, skills: [&quot;NodeJS&quot;, &quot;Express&quot;, &quot;Docker&quot;], role:
&quot;Backend&quot; },
8. { name: &quot;Hải&quot;, skills: [&quot;Figma&quot;, &quot;UI/UX&quot;], role: &quot;Design&quot; },
9. { name: &quot;Linh&quot;, skills: [&quot;Python&quot;, &quot;Pandas&quot;, &quot;Scikit-Learn&quot;], role:
&quot;Data Science&quot; }
];
Viết một hàm buildWebTeam(data) xử lý mảng trên để:
1. Lọc ra những ứng viên có role là &quot;Frontend&quot; hoặc &quot;Backend&quot;.
2. Trả về một mảng chỉ chứa tên của những ứng viên đó, kèm theo lời chào. Kết quả mong
đợi: [&quot;Chào Bình, mời bạn vào team Web!&quot;, &quot;Chào Châu, mời bạn vào team Web!&quot;].*/

const candidates = [
 { name: "An", skills: ["C++", "Python"], role: "AI" },
 { name: "Bình", skills: ["HTML", "CSS", "JavaScript"], role: "Frontend" },
 { name: "Châu", skills: ["NodeJS", "MongoDB"], role: "Backend" },
 { name: "Dung", skills: ["Python", "TensorFlow"], role: "AI" },
 { name: "Trung", skills: ["HTML", "CSS", "ReactJS"], role: "Frontend" },
 { name: "Thơ", skills: ["NodeJS", "Express", "Docker"], role: "Backend" },
 { name: "Hi", skills: ["Figma", "UI/UX"], role: "Design" },
 { name: "Linh", skills: ["Python", "Pandas", "Scikit-Learn"], role: "Data Science" }
];
const greetings = candidates
    .filter(candidate => candidate.role === "Frontend" || candidate.role === "Backend")
    .map(candidate => `Chào ${candidate.name}, mời bạn vào team Web!`)
    console.log(greetings)