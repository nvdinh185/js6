var chieuDai = prompt("Nhập chiều dài: ");
var chieuRong = prompt("Nhập chiều rộng: ");
chieuDai = Number(chieuDai);
chieuRong = Number(chieuRong);

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);

