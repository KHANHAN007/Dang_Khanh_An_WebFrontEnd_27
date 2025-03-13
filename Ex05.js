function chunkArray(arr, size) {
    if (!Array.isArray(arr) || typeof size !== "number" || size <= 0) {
        return "dữ liệu không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += Math.ceil(arr.length / size)) {
        result.push(arr.slice(i, i + Math.ceil(arr.length / size)));
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray("abc", 3));
