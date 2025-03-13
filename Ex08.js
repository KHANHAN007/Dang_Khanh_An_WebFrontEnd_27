function getMaxNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
        return "dữ liệu không hợp lệ";
    }
    return Number(num.toString().split("").sort((a, b) => b - a).join(""));
}
console.log(getMaxNumber(2941));
console.log(getMaxNumber(3875));
console.log(getMaxNumber("1h8t"))
