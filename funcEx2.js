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
    }
];

var abc = { a: 123 };

console.log(abc);
console.log(students);

function addMath(arrStudents) {
    for (const student of arrStudents) {
        student.toan += 1;
    }
}

function change(obj) {
    obj.a += 456;
}

change(abc);

addMath(students);

console.log(abc);
console.log(students);