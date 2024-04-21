// Exercise -  001
// Declare a variable without assigning any value to it. Then, on another line, assign it a numeric value. Finally, perform a reassignment to add 1 to that variable. Do this reassignment in three different ways. Remember to use console.logs every time you want to check your progress.


let myNumber;
console.log(myNumber); // undefined
myNumber = 5;
console.log(myNumber); // 5
myNumber += 1;
console.log(myNumber); // 6
myNumber++;
console.log(myNumber); // 7
myNumber = myNumber + 1;
console.log(myNumber); // 8





// Exercise -  002
// Declare two variables, one with the value 3 (number) and the other with the value "3" (string). Make a console.log to compare if both are equal and return true. Make another one to compare them strictly and return false. Do the same but checking if they are NOT equal. Make a console.log to check if the first one is greater than or equal to 7. Finally, make a console.log to check if the two variables are strictly equal OR if the first variable is less than or equal to 3.
let num = 3;
let str = "3";
console.log(num == str); // true
console.log(num === str); // false
console.log(num != str); // false
console.log(num !== str); // true


