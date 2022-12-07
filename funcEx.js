var ab = { n: 123 };
console.log(ab);

function myFunc(obj) {
    obj = { n: 456 };
    console.log(obj);
}

function myFunc2(obj) {
    obj.n = 456;
    console.log(obj);
}

myFunc2(ab);
console.log(ab);

/////////////////////////////////////////////////////////////////////////
function changeObject(x) {
    x = { member: "bar" };
    console.log("in changeObject: " + x.member);
}

function changeMember(x) {
    x.member = "bar";
    console.log("in changeMember: " + x.member);
}

var x = { member: "foo" };

console.log("before changeObject: " + x.member);
changeObject(x);
console.log("after changeObject: " + x.member); /* change did not persist */

console.log("before changeMember: " + x.member);
changeMember(x);
console.log("after changeMember: " + x.member); /* change persists */

////////////////////////////////////////////////////////////////////////////
function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num); //10
console.log(obj1.item);// changed
console.log(obj2.item);// unchanged