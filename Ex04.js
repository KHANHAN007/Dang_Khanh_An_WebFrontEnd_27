let numbers = [];
let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập danh sách số nguyên\n" +
        "2. Tính trung bình các số\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn:"
    );
    switch (choice) {
        case 1:
            inputNumbers();
            break;
        case 2:
            calculateAverage();
            break;
        case 3:
            findLargestEven();
            break;
        case 4:
            findSmallestOdd();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5); function inputNumbers() {
    let n = parseInt(prompt("Nhập số lượng số nguyên:"));
    if (isNaN(n) || n <= 0) { alert("Số lượng không hợp lệ."); return; } numbers = []; for (let i = 0; i < n; i++) {
        let
            num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`)); if (isNaN(num)) { alert("Dữ liệu không hợp lệ."); return; }
        numbers.push(num);
    } alert(`Danh sách số nguyên: ${numbers.join(", ")}`);
}
function calculateAverage() {
    if (numbers.length === 0) {
        alert(" Danh sách rỗng, hãy nhập số trước."); return;
    } let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    alert(`Trung bình các số: ${avg.toFixed(2)}`);
}
function findLargestEven() {
    if (numbers.length === 0) {
        alert("Danh sách rỗng, hãy nhập số trước.");
        return;
    }
    let evens = numbers.filter(num => num % 2 === 0);
    if (evens.length === 0) {
        alert("Không có số chẵn trong danh sách.");
        return;
    }
    let maxEven = Math.max(...evens);
    alert(`Số chẵn lớn nhất: ${maxEven}`);
}
function findSmallestOdd() {
    if (numbers.length === 0) {
        alert("Danh sách rỗng, hãy nhập số trước.");
        return;
    }
    let odds = numbers.filter(num => num % 2 !== 0);
    if (odds.length === 0) {
        alert("Không có số lẻ trong danh sách.");
        return;
    }
    let minOdd = Math.min(...odds);
    alert(`Số lẻ nhỏ nhất: ${minOdd}`);
}