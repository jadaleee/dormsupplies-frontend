// What will print and why?
// What will change if we delete line 5? Why?

function x() {
    let a;	//a is undefined
    console.log(a);
}

function y() {
    let a = 2;
    console.log(a);
    x();
}

let a = 1;
console.log(a);
y();

// prints 1
// prints 2

// prints 1 2 1
// a is defined as 1 because a is assigned to 2 only in the y() function