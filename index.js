//declaration variables
let massMark=95;      //weight in kg
let heightMark=1.88;  //height in meters

let massJohn=85;      //weight in kg
let heightJohn=1.76;  //height in meters

//calculating BMI for John and Mark
var BMIJohn = massJohn/(heightJohn*heightJohn);
var BMIMark=massMark/(heightMark*heightMark);

//create boolean variable
const markHigherBMI = BMIMark > BMIJohn;  

//output
console.log("John's BMI is "+BMIJohn);
console.log("Mark's BMI is "+BMIMark);
console.log("Mark's BMI is higher than John's BMI: "+markHigherBMI);