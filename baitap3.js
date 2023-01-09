const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];

const menu = `== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên

Nhập thao tác lựa chọn:`;

var input = prompt(menu);

if (input == 1) {
    console.log(students);
} else if (input == 2) {
    var newName = prompt("Nhập tên sinh viên: ");
    var newAddress = prompt("Nhập địa chỉ: ");
    var newStudent = {
        id: students.length + 1,
        name: newName,
        address: newAddress
    }

    students.push(newStudent);
    console.log(students);
} else if (input == 3) {
    var idEdit = prompt("Nhập mã sinh viên muốn sửa: ");

    // Tìm chỉ số của sinh viên muốn sửa
    var editIndex = searchIndex(Number(idEdit), students);

    if (editIndex == -1) {
        alert("Không tìm thấy sinh viên muốn sửa!");
    } else {
        // Lấy thông tin sinh viên muốn sửa
        var editStudent = search(Number(idEdit), students);

        var nameEdit = prompt("Nhập tên sinh viên muốn sửa: ", editStudent.name);
        var addressEdit = prompt("Nhập địa chỉ sinh viên muốn sửa: ", editStudent.address);

        var student = {
            id: Number(idEdit),
            name: nameEdit,
            address: addressEdit
        }
        students.splice(editIndex, 1, student);
    }
    console.log(students);
} else if (input == 4) {
    var idDel = prompt("Nhập mã sinh viên muốn xóa: ");

    // Tìm chỉ số của sinh viên muốn xóa
    var delIndex = searchIndex(Number(idDel), students);

    if (delIndex != -1) {
        students.splice(delIndex, 1);
        alert("Đã xóa thành công sinh viên có mã " + idDel);
    } else {
        alert("Không tìm thấy sinh viên muốn xóa!");
    }
    console.log(students);
} else {
    alert("Vui lòng nhập đúng thao tác lựa chọn!");
}

function searchIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }
    return -1;
}

function search(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}