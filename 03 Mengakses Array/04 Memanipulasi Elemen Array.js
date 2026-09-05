let buah = ['Apel', 'Pisang', 'Jeruk'];

buah.push('Mangga');

console.log(buah);
// Output: ['Apel', 'Pisang', 'Jeruk', 'Mangga']

let fruits = ['Apple', 'Banana', 'Orange'];

let lastFruit = fruits.pop();

console.log(lastFruit); // Output: 'Orange'
console.log(fruits); // Output: ['Apple', 'Banana']

let fruits = ['Apple', 'Banana', 'Orange'];

fruits.unshift('Mango');
console.log(fruits);
// Output: ['Mango', 'Apple', 'Banana', 'Orange']

let fruits = ['Apple', 'Banana', 'Orange'];

let firstFruit = fruits.shift();

console.log(firstFruit); // Output: 'Apple'
console.log(fruits); // Output: ['Banana', 'Orange']

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Menghapus elemen ketiga ('Orange')
fruits.splice(2, 1);

console.log(fruits); // Output: ['Apple', 'Banana', 'Mango']

// Mengganti elemen pertama dengan elemen baru ('Strawberry')
fruits.splice(0, 1, 'Strawberry');

console.log(fruits); // Output: ['Strawberry', 'Banana', 'Mango']

// Menambahkan elemen baru ('Pineapple') setelah elemen kedua
fruits.splice(2, 0, 'Pineapple');

console.log(fruits); // Output: ['Strawberry', 'Banana', 'Pineapple', 'Mango']

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ['Banana', 'Orange']

let fruits1 = ['Apple', 'Banana'];
let fruits2 = ['Orange', 'Mango'];

let combinedFruits = fruits1.concat(fruits2);

console.log(combinedFruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

fruits.reverse();

console.log(fruits); // Output: ['Mango', 'Orange', 'Banana', 'Apple']

let fruits = ['Banana', 'Apple', 'Orange', 'Mango'];

fruits.sort();

console.log(fruits);
// Output: ['Apple', 'Banana', 'Mango', 'Orange']

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

let joinedString = fruits.join(', ');

console.log(joinedString);
// Output: 'Apple, Banana, Orange, Mango'

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log(fruits.length); // Output: 4
