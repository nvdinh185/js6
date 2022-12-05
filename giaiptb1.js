var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
if (a === '' || b === '' || a === null || b === null) {
    alert('Vui long nhap!');
} else if (isNaN(a) || isNaN(b)) {
    console.log("Nhập hệ số không đúng định dạng số!");
} else if (a === 0) {
    console.log("Vui long nhap he so a khac 0!");
} else {
    console.log("Phuong trinh co nghiem: " + (-b / a));
}