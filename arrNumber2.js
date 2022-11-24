var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Xóa phần tử cuối cùng của mảng
console.log(arrNumber.pop());
console.log(arrNumber);

// Xóa phần tử đầu tiên của mảng
console.log(arrNumber.shift());
console.log(arrNumber);

// Thêm phần tử 0 vào cuối mảng
console.log(arrNumber.push(0));
console.log(arrNumber);

// Thêm phần tử 0 vào đầu mảng
console.log(arrNumber.unshift(0));
console.log(arrNumber);

// Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới
var arrNumberCut = arrNumber.splice(0, 5);

console.log(arrNumberCut); // mảng mới cắt được
console.log(arrNumber); // mảng còn lại sau khi cắt


// Chèn thêm số 100 vào phần tử thứ 3 của mảng
arrNumber.splice(3, 0, 100);
console.log(arrNumber);

// Thay thế phần tử thứ 4 bằng số 200
var replaceArr = arrNumber.splice(4, 1, 200);
console.log(replaceArr); // trả về phần tử thứ 4
console.log(arrNumber); // trả về mảng sau khi thay thế

// copy từ mảng arrNumber thành 1 mảng mới từ phần tử thứ 2 đến hết
var copyArrNumber = arrNumber.slice(2); // mảng arrNumber không thay đổi khi copy
console.log(copyArrNumber);

// copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 3
var copyArrNumber2 = arrNumber.slice(0, 3);
console.log(copyArrNumber2);

var arrNumber2 = [11, 22, 33, 44, 55];

// Nối mảng arrNumber2 vào mảng arrNumber
console.log(arrNumber.concat(arrNumber2));

console.log(arrNumber);