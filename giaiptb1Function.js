
function inputNumber(msg) {
    var number = prompt(msg);
    if (number === '' || number === null) {
        console.log("Vui lòng nhập!");
    } if (isNaN(number)) {
        console.log("Không đúng định dạng!");
    } else {
        return number;
    }
}

function giaiPTB1(a, b) {
    if (!a || !b) {
        console.log("Lỗi khi nhập!");
    } else if (a == 0 && b == 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem: " + (-b / a));
    }
}


var a = inputNumber("Nhập hệ số a: ");
var b = inputNumber("Nhập hệ số b: ");

giaiPTB1(a, b);