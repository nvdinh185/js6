const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];

const menu = `1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
3. lọc ra các sinh viên xếp loại giỏi
4. tìm 1 sinh viên xếp loại giỏi
5. cộng cho mỗi sinh viên 1 điểm toán
6. thêm thuộc tính tổng điểm 3 môn
7. tính tổng điểm toán của các sinh viên
8. tính điểm toán trung bình của các sinh viên
9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
0. Thoát

Nhập thao tác lựa chọn:`;

var input = prompt(menu);

if (input == 1) {
    if (isUpNormal(students)) {
        console.log('Tất cả sinh viên đều có các môn trên điểm trung bình');
    } else {
        console.log('Không phải tất cả sinh viên đều có các môn trên điểm trung bình');
    }
} else if (input == 2) {
    if (haveGoodStudent(students)) {
        console.log('có sinh viên nào xếp loại giỏi');
    } else {
        console.log('không có sinh viên nào xếp loại giỏi');
    }
} else if (input == 3) {
    displayGoodStudents(students);
} else if (input == 4) {
    console.log(findGoodStudent(students));
} else if (input == 5) {
    var listStudents = addMath(students);
    for (const student of listStudents) {
        console.log(student);
    }
} else if (input == 6) {
    console.log(sumScore(students));
} else if (input == 7) {
    console.log("Tổng điểm toán của các sinh viên: ", totalMath(students));
} else if (input == 8) {
    console.log("Điểm toán trung bình của các sinh viên: ", totalMath(students) / students.length);
} else if (input == 9) {
    sortStudents(students);
} else {
    console.log('Good bye!!!');
}

// 1. Hàm kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
function isUpNormal(arrStudents) {
    for (const student of arrStudents) {
        if (!(student.toan >= 5 && student.ly >= 5 && student.hoa >= 5)) {
            return false;
        }
    }
    return true;
}

// 2. Hàm kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
function haveGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return true;
        }
    }
    return false;
}

// 3. Hàm lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa
function displayGoodStudents(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            console.log("Tên: " + student.name + " - Toán: " + student.toan + " - Lý: " + student.ly + " - Hóa: " + student.hoa);
        }
    }
}

// 4. Hàm tìm 1 sinh viên xếp loại giỏi
function findGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return student;
        }
    }
}

// 5. Hàm cộng cho mỗi sinh viên 1 điểm toán
function addMath(arrStudents) {
    var listNewStudents = [];
    for (const student of arrStudents) {
        student.toan < 10 ? student.toan += 1 : '',
            listNewStudents.push(student);
    }
    return listNewStudents;
}

// 6. Hàm thêm thuộc tính tổng điểm 3 môn
function sumScore(arrStudents) {
    var listNewStudents = [];
    for (const student of arrStudents) {
        student.sum = student.toan + student.ly + student.hoa;
        listNewStudents.push(student);
    }
    return listNewStudents;
}

// 7. Hàm tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
function totalMath(arrStudents) {
    var sum = 0;
    for (const student of arrStudents) {
        sum += student.toan;
    }
    return sum;
}

//9. Hàm sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sortStudents(arrStudents) {

    function compare(a, b) {
        if (a.toan > b.toan) {
            return 1;
        }
        if (a.toan < b.toan) {
            return -1;
        }
        return 0;
    }

    arrStudents.sort(compare);

    console.log(arrStudents);
}