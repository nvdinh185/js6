var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Xóa phần tử cuối cùng của mảng
console.log(arrNumber.pop()); // trả về phần tử đã xóa
console.log(arrNumber); // mảng còn lại sau khi xóa

// Xóa phần tử đầu tiên của mảng
console.log(arrNumber.shift()); // trả về phần tử đã xóa
console.log(arrNumber); // mảng còn lại sau khi xóa

// Thêm phần tử 0 vào cuối mảng
console.log(arrNumber.push(0)); // trả về độ dài của mảng sau khi thêm
console.log(arrNumber); // mảng sau khi thêm

// Thêm phần tử 0 vào đầu mảng
console.log(arrNumber.unshift(0)); // trả về độ dài của mảng sau khi thêm
console.log(arrNumber); // mảng sau khi thêm

// Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
var arrNumberCut = arrNumber.splice(0, 5);

console.log(arrNumberCut); // mảng mới cắt được
console.log(arrNumber); // mảng còn lại sau khi cắt


// Chèn thêm số 100 vào phần tử thứ 3 của mảng
arrNumber.splice(3, 0, 100);
console.log(arrNumber);

// Thay thế phần tử thứ 5 bằng số 200
var replaceArr = arrNumber.splice(4, 1, 200);
console.log(replaceArr); // trả về phần tử thứ 5
console.log(arrNumber); // trả về mảng sau khi thay thế

// copy từ mảng arrNumber thành 1 mảng mới từ phần tử thứ 3 đến hết
var copyArrNumber = arrNumber.slice(2); // mảng arrNumber không thay đổi sau khi copy
console.log(copyArrNumber);

// copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 3
var copyArrNumber2 = arrNumber.slice(0, 2);
console.log(copyArrNumber2);

var arrNumber2 = [11, 22, 33, 44, 55];

// Nối mảng arrNumber2 vào mảng arrNumber
console.log(arrNumber.concat(arrNumber2));

console.log(arrNumber);