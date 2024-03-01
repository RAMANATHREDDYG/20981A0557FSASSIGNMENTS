// create type of number
console.log("\n1.BASIC DATA TYPES:");
console.log("  ===== ==== ======");
var roll_no = 557;
console.log("Roll.no of type number: " + roll_no);
// create type of string
var my_name = 'RAMANATH';
console.log("My name of type string: " + my_name);
// create type of boolean
var boy = true;
console.log("Gender of boy or not of type boolean: " + boy);
// create array type of numbers
var phonenumber = [
    9391233969,
    9705903030,
    9441931960
];
console.log("Phone numbers of type numbers in array:\n");
for (var i = 0; i < phonenumber.length; i++) {
    console.log("Phone number " + (i + 1) + " is: " + phonenumber[i]);
}
// create tuple type of string and number
var address = [
    "vempalli",
    516329
];
console.log("\nAddress is tuple of type string and number : " + address[0] + " and pin code is : " + address[1]);
// create enum
var days;
(function (days) {
    days[days["sunday"] = 1] = "sunday";
    days[days["monday"] = 2] = "monday";
    days[days["tuesday"] = 3] = "tuesday";
    days[days["wednesday"] = 4] = "wednesday";
    days[days["thursday"] = 5] = "thursday";
    days[days["friday"] = 6] = "friday";
    days[days["saturday"] = 7] = "saturday";
})(days || (days = {}));
// create function add and return their sum 
console.log("\n2.FUNCTIONS");
console.log("  =========");
function add(first, second) {
    if (first === void 0) { first = 0; }
    if (second === void 0) { second = 0; }
    return first + second;
}
console.log("After passing two parameters their sum is : " + add(10, 20));
console.log("After passing one parameter their sum is : " + add(40));
console.log("After passing zero parameter their sum is : " + add());
// create function captalize and return its capitalized version
function captalize(word) {
    if (word === void 0) { word = ""; }
    if (!word) {
        return word;
    }
    return word[0].toUpperCase() + word.slice(1);
}
console.log("\nAfter passing the string its capitalized version sum is : " + captalize("ramanath"));
console.log("Passed nothing its capitalized version sum is : " + captalize());
// create interafce of person
console.log("\n3.INTERFACES");
console.log("  ==========");
var user = [
    { name: "RAMANATH", age: 21, email: "ramanathreddyg04@gmail.com" },
    { name: "DAMU", age: 24, email: "damug04@gmail.com" }
];
for (var index = 0; index < user.length; index++) {
    console.log(user[index]);
}
// create class named car
console.log("\n4.CLASSES");
console.log("  =======");
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        return "Make: " + this.make + ", Model : " + this.model + " and Year: " + this.year;
    };
    return Car;
}());
var car_obj = new Car("MERCEDES-BENZ", "EQC", 2020);
console.log(car_obj.displayInfo());
// craeted geeneruc function
console.log("\n5.GENERICS");
console.log("  ========");
var arr = [
    { name: "RAM", roll_no: 557, gender: "MALE", age: 21, s_no: "FIRST" },
    { name: "DAMU", roll_no: 457, gender: "MALE", age: 24, s_no: "SECOND" },
    { name: "SAM", roll_no: 357, gender: "FEMALE", age: 24, s_no: "THIRD" }
];
console.log("Before reverse operation the original array is:");
for (var index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
function reversearray(arr) {
    return arr.reverse();
}
var reversedArray = reversearray(arr);
console.log("\nAfter reverse operation the reversed array is:");
for (var index = 0; index < reversedArray.length; index++) {
    console.log(reversedArray[index]);
}
