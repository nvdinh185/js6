var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
var c = prompt("Nhập hệ số c: ");

if (a === "" || b === "" || c === "" || a === null || b === null || c === null) {
    console.log('Không được bỏ trống');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Vui lòng nhập số');
} else {
    if (a == 0) {
        console.log("phương trình có nghiệm là " + (-c / b));
    } else {

        var delta = Math.pow(b, 2) - (4 * a * c);
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta == 0) {
            console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a)));
        } else {
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
        }
    }
}