var banKinh = prompt("Nhập bán kính: ");
banKinh = Number(banKinh);

const PI = 3.14;

const chuVi = banKinh * 2 * PI;
const dienTich = banKinh * banKinh * 3.14;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);