var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 20
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

var newCourses = function (listCourses) {
    var newListCourses = [];
    for (const course of listCourses) {
        course.name = `Khoa hoc ${course.name}`;
        course.coinText = `Gia ${course.coin}`;
        newListCourses.push(course);
    }
    return newListCourses;
}

console.log(newCourses(courses));

//============================================================

var totalCoin = 0;
for (let i = 0; i < courses.length; i++) {
    totalCoin += courses[i].coin;
}

console.log(totalCoin);

//============================================================

var arrayNumber = [1, 2, 3, [4, 5], 6, 7, [8, 9, 0]];

var flatOutput = [];
for (const number of arrayNumber) {
    flatOutput = flatOutput.concat(number);
}

console.log(flatOutput);

//============================================================

var topics = [
    {
        topic: "front-end",
        courses: [
            {
                id: 1,
                name: "Javascript",
                coin: 20
            },
            {
                id: 2,
                name: "HTML/CSS",
                coin: 30
            }
        ]
    },
    {
        topic: "back-end",
        courses: [
            {
                id: 1,
                name: "Java",
                coin: 50
            },
            {
                id: 2,
                name: "NodeJs",
                coin: 40
            }
        ]
    }
]

var arrayTopics = [];
for (const topic of topics) {
    arrayTopics = arrayTopics.concat(topic.courses);
}

console.log(arrayTopics);