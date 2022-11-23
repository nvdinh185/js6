var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");
var c = prompt("Nhập c: ");

var delta = Math.pow(b, 2) - 4 * a * c;
if (a != 0) {
    if (delta < 0) {
        console.log("phuong trinh vo nghiem");
    } else if (delta == 0) {
        console.log("phuong trinh co nghiem kep:" + (-b / 2) * a);
    } else {
        console.log(
            " phuong trinh co 2 nghiem phan biet la:" +
            (+(-b + Math.sqrt(delta)) / 2) * a,
            "va " + ((-b - Math.sqrt(delta)) / 2) * a
        );
    }
} else if (a == 0 && b != 0) {
    console.log("phuong trinh vo nghiem");
} else if (a == 0 && b == 0) {
    console.log("phuong trinh vo so nghiem");
} else {
    console.log("phuong trinh co nghiem la" + -b / a);
}