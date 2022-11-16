var languages = [
    "Javascript",
    "PHP",
    "Ruby"
]

var languages2 = [
    "Dark",
    "Java"
]

console.log(languages.join(", ")); // Nối các phần tử trong mảng lại thành string

console.log(languages.pop()); // Xóa phần tử cuối cùng trong mảng, trả về phần tử đã xóa

console.log(languages.shift()); // Xóa phần tử đầu tiên trong mảng, trả về phần tử đã xóa

console.log(languages.push("Dark", "Java")); // Thêm phần tử vào cuối mảng, trả về độ dài mảng sau khi thêm

console.log(languages.unshift("Dark", "Java")); // Thêm phần tử vào đầu mảng, trả về độ dài mảng sau khi thêm

console.log(languages.splice(1, 2)); // Xóa n phần tử trong mảng, từ vị trí thứ m, trả về các phần tử đã xóa

console.log(languages.splice(1, 0, "Dark", "Java")); // Xóa và chèn

console.log(languages.concat(languages2)); // Nối mảng

console.log(languages.slice(1, 2)); // copy mảng

console.log(languages);