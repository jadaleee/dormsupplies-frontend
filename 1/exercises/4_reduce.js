// complete the implementation of sum and reduce such that reducing an array
// returns the sum of its values
// [0,1,2,3].fold(sum, 0) === 6

const arr = [0,1,2,3,4];

let sum = function(acc, el) {
	return acc + el
};

Array.prototype.reduce = function(f, accum) {
	let sum = 0;
	for (let i = 0; i < this.length; i++) {
		sum = f(accum, this[i])
		accum = f(accum, this[i])
	}
	return sum
};

const total = arr.reduce(sum, 0);
console.log(total);
