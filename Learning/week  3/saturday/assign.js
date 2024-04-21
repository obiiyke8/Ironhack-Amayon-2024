let total = 0;
for (let i = 0; index <=  100; index++) {
total +=i;
}
console.log(total)




// Create an array of numbers with random values
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}

// Initialize smallest and largest numbers to first element of the array
let smallest = numbers[0];
let largest = numbers[0];

// Iterate over the array to find the smallest and largest numbers
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

// Print the smallest and largest numbers in the console
console.log(`Smallest number: ${smallest}`);
console.log(`Largest number: ${largest}`);





