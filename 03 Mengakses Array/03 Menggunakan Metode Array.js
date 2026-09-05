let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

let numbers = [1, 2, 3, 4, 5];

let foundNumber = numbers.find(function(number) {
  return number > 3;
});

console.log(foundNumber); // Output: 4

let numbers = [1, 2, 3, 4, 5];

let index = numbers.indexOf(4);

console.log(index); // Output: 3

let numbers = [1, 2, 3, 4, 5];

let includesNumber = numbers.includes(5);

console.log(includesNumber); // Output: true
