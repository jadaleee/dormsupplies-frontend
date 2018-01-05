// complete the following such that a new array with only integers
// (while numbers) is returned

const arr = ['hello', 42, true, function() {}, "123", 3.14, 0, [1], {}];

let isInteger = function(el) { 
	return typeof el == 'number' && Math.floor(el) === Math.ceil(el)
};

Array.prototype.filter = function(f) {
	let arr = []
	for(let i = 0; i < this.length; i++) {
		if (f(this[i])) {
			arr.push(this[i])
		}
	}
	return arr;
};

const newArr = arr.filter(isInteger);
console.log(newArr);
