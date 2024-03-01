
// create type of number
console.log("\n1.BASIC DATA TYPES:")
console.log("  ===== ==== ======")
let roll_no:number=557

console.log("Roll.no of type number: "+roll_no)
// create type of string
let my_name:string='RAMANATH'
console.log("My name of type string: "+my_name)

// create type of boolean
let boy:boolean=true
console.log("Gender of boy or not of type boolean: "+boy)

// create array type of numbers
let phonenumber:number[]=[
    939_123_3969,
    970_590_3030,
    944_193_1960
]
console.log("Phone numbers of type numbers in array:\n")
for(let i=0;i<phonenumber.length;i++){
    console.log("Phone number "+(i+1)+" is: "+phonenumber[i])
}

// create tuple type of string and number
let address:[string,number]=[
    "vempalli",
    516329
]

console.log("\nAddress is tuple of type string and number : "+address[0]+" and pin code is : "+address[1])
// create enum
enum days {sunday=1,monday,tuesday,wednesday,thursday,friday,saturday}

// create function add and return their sum 
console.log("\n2.FUNCTIONS")
console.log("  =========")
function add (first=0,second=0):number{
    return first+second
}

console.log("After passing two parameters their sum is : "+add(10,20))
console.log("After passing one parameter their sum is : "+add(40))
console.log("After passing zero parameter their sum is : "+add())

// create function captalize and return its capitalized version
function captalize (word:string=""):string{
    if(!word){
        return word
    }
    return word[0].toUpperCase()+word.slice(1)
}

console.log("\nAfter passing the string its capitalized version sum is : "+captalize("ramanath"))
console.log("Passed nothing its capitalized version sum is : "+captalize())

// create interafce of person
console.log("\n3.INTERFACES")
console.log("  ==========")
interface Person{
    name:string,
    age:number;
    email:string
}

let user:Person[] =[
    {name:"RAMANATH",age:21,email:"ramanathreddyg04@gmail.com"},
    {name:"DAMU",age:24,email:"damug04@gmail.com"}
]

for (let index = 0; index < user.length; index++) {
    console.log(user[index])
    
}

// create class named car
console.log("\n4.CLASSES")
console.log("  =======")
class Car{
    make:string
    model:string
    year:number
    constructor(make:string,model:string,year:number){
        this.make=make
        this.model=model
        this.year=year
    }

    displayInfo():string{
        return "Make: "+this.make+", Model : "+this.model+" and Year: "+this.year
    }

}

let car_obj=new Car("MERCEDES-BENZ","EQC",2020)
console.log(car_obj.displayInfo())

// craeted geeneruc function
console.log("\n5.GENERICS")
console.log("  ========")
interface input_array{
    name:string,
    roll_no:number,
    gender:string,
    age:number
    s_no:string
}

let arr:Array<input_array>=[
    {name:"RAM",roll_no:557,gender:"MALE",age:21,s_no:"FIRST"},
    {name:"DAMU",roll_no:457,gender:"MALE",age:24,s_no:"SECOND"},
    {name:"SAM",roll_no:357,gender:"FEMALE",age:24,s_no:"THIRD"}
]

console.log("Before reverse operation the original array is:")
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
    
}
function reversearray(arr:Array<input_array>):Array<input_array>{
    return arr.reverse();
}

let reversedArray:Array<input_array>=reversearray(arr)
console.log("\nAfter reverse operation the reversed array is:")
for (let index = 0; index < reversedArray.length; index++) {
    console.log(reversedArray[index])    
}