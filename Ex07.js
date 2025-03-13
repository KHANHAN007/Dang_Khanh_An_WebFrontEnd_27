function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || arr.some(num => !Number.isInteger(num))) {
        return "dữ liệu không hợp lệ";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1;
        }
    }
    return "Không có số bị thiếu";
}
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber("abc")); 
