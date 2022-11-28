var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 0
    },
    {
        id: 2,
        name: "PHP",
        coin: 0
    },
    {
        id: 3,
        name: "Ruby",
        coin: 30
    },
    {
        id: 4,
        name: "Java",
        coin: 10
    },
    {
        id: 5,
        name: "Dark",
        coin: 0
    }
]

function checkEveryFree(listCourses) {
    for (const course of listCourses) {
        if (course.coin !== 0) return false;
    }
    return true;
}
console.log("isEveryFree: " + checkEveryFree(courses));

function checkSomeFree(listCourses) {
    for (const course of listCourses) {
        if (course.coin === 0) return true;
    }
    return false;
}

console.log("isSomeFree: " + checkSomeFree(courses));