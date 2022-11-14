// function myFunction(cb) {
//     cb("Hello World!");
// }

// function callBack(value) {
//     console.log("value: ", value);
// }

function myFunction(a, b, cb) {
    cb(undefined, a + b);
}

function callBack(err, value) {
    console.log("value: ", value);
}

myFunction(1, 2, callBack);

// function hello() {
//     console.log("Hello World!");
// }

// function goiHam(fn) {
//     fn();
// }

// goiHam(hello);