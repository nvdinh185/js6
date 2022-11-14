function add(a, b, cb) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000)
}

function callBack(err, result) {
    if (err) return console.log("Loi: " + err);
    console.log("Ket qua: " + result);
}

add(4, 5, callBack);

// let myFnc = (callback) => {
//     var output = [];
//     var result = callback(1, 2);
//     output.push(result);
//     return output;
// }

// let add = (cb) => {
//     cb(20);
// }

// add(result => {
//     console.log("Ket qua: " + result);
// })

// function add(cb) {
//     cb(20);
// }

// function callBack(result) {
//     console.log("Ket qua: " + result);
// }

// add(callBack)