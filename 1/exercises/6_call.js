// The variable arguments is an object that contains the parameters passed to a
// function. It is not an array, but it has an array-like structure.
// Use call() and Array.prototype.reduce() to output "Hello, world!"

let notArr;

function populateNotArr() {
    notArr = arguments;
}

populateNotArr('Hello', ',', ' ', 'world', '!')

console.log(notArr);

const result = Array.prototype.reduce.call(notArr, (x, y) => x + y, '');

console.log(result);