var banKinhStr = prompt("Nhập bán kính: ");
var banKinh = Number(banKinhStr);

if (banKinhStr === '' || banKinhStr === null) {
    alert('Vui long nhap!');
} else if (isNaN(banKinh)) {
    alert("Vui lòng nhập bán kính là số!")
} else {

    const PI = 3.14;

    var chuVi = banKinh * 2 * PI;
    var dienTich = banKinh * banKinh * PI;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);
}