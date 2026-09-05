let x = 5;
let y = 3;

let isBothTrue = (x > 0) && (y < 10); // Hasil: true
let isAnyFalse = (x > 0) && (y > 10); // Hasil: false

let x = 5;
let y = 3;

let isEitherTrue = (x > 0) || (y > 10); // Hasil: true
let areBothFalse = (x < 0) || (y < 0); // Hasil: false

let x = 5;
let y = 3;

let isXNotZero = !(x === 0); // Hasil: true
let isYNotPositive = !(y > 0); // Hasil: false
