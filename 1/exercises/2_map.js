// complete the implementation of triple and map such that
// [0,3,6,9,12] is printed

const arr = [0,1,2,3,4];

let triple = (n) => n * 3;

Array.prototype.map = function(f) {		// takes in function called f
	let arr = [];
	for (let i = 0; i < this.length; i++) { 	//this refers to Array in blue italicized above
		arr.push(f(this[i]));
	} 
	return arr;
}; 

const newArr = arr.map(triple);
console.log(newArr);
