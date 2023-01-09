// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}

function search(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return array[i];
    }
}

var arrayNumber = [];

for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(10));
}
console.log(arrayNumber);

var input = prompt('Nhập số muốn tìm: ');

if (search(Number(input), arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(Number(input), arrayNumber);
if (idx !== -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}