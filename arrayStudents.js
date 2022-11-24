var students = [
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

// 1. Hàm kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)
function isUpNormal(arrStudents) {
    for (const student of arrStudents) {
        if (!(student.toan > 5 && student.ly > 5 && student.hoa > 5)) {
            return false;
        }
    }
    return true;
}
console.log(isUpNormal(students));

// 2. Hàm kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)
function haveGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return true;
        }
    }
    return false;
}
console.log(haveGoodStudent(students));

// 3. Hàm lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa
function displayGoodStudents(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            console.log("Tên: " + student.name + " - Toán: " + student.toan + " - Lý: " + student.ly + " - Hóa: " + student.hoa);
        }
    }
}
displayGoodStudents(students);

// 4. Hàm tìm 1 sinh viên xếp loại giỏi
function findGoodStudent(arrStudents) {
    for (const student of arrStudents) {
        if ((student.toan >= 8 && student.ly >= 8 && student.hoa >= 8)) {
            return student;
        }
    }
}
console.log(findGoodStudent(students));

// 5. Hàm cộng cho mỗi sinh viên 1 điểm toán
function addMath(arrStudents) {
    var listNewStudents = [];
    for (const student of arrStudents) {
        listNewStudents.push({
            id: student.id,
            name: student.name,
            toan: student.toan < 10 ? student.toan + 1 : student.toan,
            ly: student.ly,
            hoa: student.hoa
        });
    }
    return listNewStudents;
}

var listStudents = addMath(students);
for (const student of listStudents) {
    console.log(student);
}

// 6. Hàm tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên
function totalMath(arrStudents) {
    var sum = 0;
    for (const student of arrStudents) {
        sum += student.toan;
    }
    return sum;
}

console.log("Tổng điểm toán của các sinh viên: ", totalMath(students));
console.log("Điểm toán trung bình của các sinh viên: ", totalMath(students) / students.length);