let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Tính diện tích hình tròn\n" +
        "2. Tính chu vi hình tròn\n" +
        "3. Tính diện tích hình chữ nhật\n" +
        "4. Tính chu vi hình chữ nhật\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn:"
    );
    switch (choice) {
        case 1:
            let radius1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (isNaN(radius1) || radius1 <= 0) {
                alert("Bán kính không hợp lệ.");
            } else {
                alert(`Diện tích hình tròn: ${circleArea(radius1).toFixed(2)}`);
            }
            break;
        case 2:
            let radius2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (isNaN(radius2) || radius2 <= 0) {
                alert("Bán kính không hợp lệ.");
            } else {
                alert(`Chu vi hình tròn: ${circlePerimeter(radius2).toFixed(2)}`);
            }
            break;
        case 3:
            let width1 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            let height1 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            if (isNaN(width1) || isNaN(height1) || width1 <= 0 || height1 <= 0) {
                alert("Kích thước không hợp lệ.");
            } else {
                alert(`Diện tích hình chữ nhật: ${rectangleArea(width1, height1).toFixed(2)}`);
            }
            break;
        case 4:
            let width2 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            let height2 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            if (isNaN(width2) || isNaN(height2) || width2 <= 0 || height2 <= 0) {
                alert("Kích thước không hợp lệ.");
            } else {
                alert(`Chu vi hình chữ nhật: ${rectanglePerimeter(width2, height2).toFixed(2)}`);
            }
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);
function circleArea(radius) {
    return Math.PI * radius * radius;
}
function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}
function rectangleArea(width, height) {
    return width * height;
}
function rectanglePerimeter(width, height) {
    return 2 * (width + height);
}