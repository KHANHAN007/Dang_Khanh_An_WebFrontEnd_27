let students = [];
let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập danh sách sinh viên\n" +
        "2. Hiển thị danh sách sinh viên\n" +
        "3. Tìm sinh viên theo tên\n" +
        "4. Xóa sinh viên khỏi danh sách\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn (1-5):"
    );
    switch (choice) {
        case 1:
            addStudents();
            break;
        case 2:
            showStudents();
            break;
        case 3:
            findStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);
function addStudents() {
    let count = parseInt(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(count) || count <= 0) {
        alert("Số lượng không hợp lệ.");
        return;
    }
    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();
        if (name) {
            students.push(name);
        } else {
            alert("Tên sinh viên không hợp lệ.");
            i--;
        }
    }
    alert("Đã nhập xong danh sách sinh viên.");
}
function showStudents() {
    if (students.length === 0) {
        alert("Danh sách sinh viên trống.");
    } else {
        alert("Danh sách sinh viên:\n" + students.join("\n"));
    }
}
function findStudent() {
    let name = prompt("Nhập tên sinh viên cần tìm:").trim();
    let found = students.filter(student => student.toLowerCase().includes(name.toLowerCase()));

    if (found.length > 0) {
        alert("Sinh viên tìm thấy:\n" + found.join("\n"));
    } else {
        alert("Không tìm thấy sinh viên trong danh sách.");
    }
}
function deleteStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa:").trim();
    let index = students.findIndex(student => student.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        students.splice(index, 1);
        alert(`Đã xóa sinh viên "${name}" khỏi danh sách.`);
    } else {
        alert("Không tìm thấy sinh viên trong danh sách.");
    }
}