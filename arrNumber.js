var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// in mảng theo thứ tự tăng dần
for (let i = 0; i < arrNumber.length; i++) {
    console.log(arrNumber[i]);
}

// in mảng theo thứ tự giảm dần
for (let i = arrNumber.length - 1; i >= 0; i--) {
    console.log(arrNumber[i]);
}

// Xóa phần tử cuối cùng của mảng
console.log(arrNumber.pop());

// Xóa phần tử đầu tiên của mảng
console.log(arrNumber.shift());

// Thêm phần tử 0 vào cuối mảng
console.log(arrNumber.push(0));

// Thêm phần tử 0 vào đầu mảng
console.log(arrNumber.unshift(0));

// Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
var arrNumberCut = arrNumber.splice(0, 5);

console.log(arrNumberCut);

// Chèn thêm số 10 vào vị trí thứ 5 của mảng
var replaceArr = arrNumber.splice(5, 0, 10);

// Thay thế phần tử thứ 5 bằng số 10
var replaceArr = arrNumber.splice(4, 1, 10);

// copy từ mảng arrNumber thành 1 mảng mới từ vị trí 5 đến hết
var copyArrNumber = arrNumber.slice(5);

// copy từ mảng arrNumber thành 1 mảng mới từ vị trí đầu tiên đến vị trí thứ 5
var copyArrNumber2 = arrNumber.slice(0, 5);

var arrNumber2 = [11, 22, 33, 44, 55];

// Nối mảng arrNumber2 vào mảng arrNumber
arrNumber = arrNumber.concat(arrNumber2);

console.log(arrNumber);