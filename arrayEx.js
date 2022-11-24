const students = [
    {
        id: 1,
        name: "Dinh",
        diachi: "hue"
    },
    {
        id: 2,
        name: "Nam",
        diachi: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        diachi: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        diachi: "hue"
    },
    {
        id: 5,
        name: "Tri",
        diachi: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        diachi: "hue"
    },
    {
        id: 7,
        name: "Binh",
        diachi: "da nang"
    }
];

const menu = `1. Xem danh sách sinh viên:
2. Thêm sinh viên:
3. Sửa sinh viên:
4. Xóa sinh viên:

Nhập thao tác lựa chọn:`;

var cont = true;
do {
    try {
        var input = prompt(menu);
        if (input == "") throw new Error("Vui lòng nhập thao tác lựa chọn!");
        cont = false;
    } catch (error) {
        alert(error);
    }
} while (cont);

if (input == 1) {
    console.log(students);
} else if (input == 2) {
    var myname = prompt("Nhập tên sinh viên: ");
    var diachi = prompt("Nhập địa chỉ: ");
    var student = {
        id: students.length + 1,
        name: myname,
        diachi: diachi
    }

    students.push(student);
    console.log(students);
} else if (input == 3) {
    var idEdit = prompt("Nhập mã sinh viên muốn sửa: ");

    var editIndex = students.findIndex(function (student) {
        return student.id == idEdit;
    })
    if (editIndex == -1) {
        alert("Không tìm thấy sinh viên muốn sửa!");
    } else {
        var editStudent = students.find(function (student) {
            return student.id == idEdit;
        })

        var nameEdit = prompt("Nhập tên sinh viên muốn sửa: ", editStudent.name);
        var diaChiEdit = prompt("Nhập địa chỉ sinh viên muốn sửa: ", editStudent.diachi);

        var student = {
            id: Number(idEdit),
            name: nameEdit,
            diachi: diaChiEdit
        }
        students.splice(editIndex, 1, student);
    }
    console.log(students);
} else if (input == 4) {
    var idDel = prompt("Nhập mã sinh viên muốn xóa: ");
    var delIndex = students.findIndex(function (student) {
        return student.id == idDel;
    })
    if (delIndex != -1) {
        students.splice(delIndex, 1);
    } else {
        alert("Không tìm thấy sinh viên muốn xóa!")
    }
    console.log(students);
} else {
    alert("Có lỗi gì đó rồi!");
}