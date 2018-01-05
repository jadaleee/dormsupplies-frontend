// try running this code with `node app.js`, and you'll notice it errors.
// what must you do to make the code work?

const express = require('express')
const app = express()

// use a for loop to create an array with each lowercase letter in the alphabet
// resulting array should be ['a', 'b', ... 'y', 'z']
const arr = []
for (let i = 65; i<91; i++){
	arr.push(String.fromCharCode(i))
}
console.log(arr)

for (let j = 0; j<arr.length; j++){
	app.get('/'+arr[j], function (req, res) {
		res.send(j+1+'')
	})
}

// use a for loop to generate an app.get function for each endpoint
// callback function should res.send the letter's index in the alphabet
// do not use block scoped variables (let)
// do not use Array.prototype.forEach()
// first endpoint should be:
// app.get('/a', function(req, res) { res.send("1") });



// by the time you get to this point, Noah will have pushed a new commit
// updating ./students.js
// import that array into this file, and write an endpoint at GET /partners
// that randomly pairs students. feel free to use whatever data structure you
// see fit

const students = require('./students.js')

console.log(students)

var splitPairs = function(arr, size) {
    var pairs = [];
    for (var i=0 ; i<arr.length ; i+=2) {
        if (arr[i+1] !== undefined) {
        	if (size>0) {
        		pairs.push ([arr[i], arr[i+1], arr[i+2]])
        		i++
        	}
        	else {
            	pairs.push ([arr[i], arr[i+1]]);
            }
        } 
        else {
            pairs.push ([arr[i]]);
        }
    }
    return pairs;
};

app.get('/partners', function (req,res){
	res.send(splitPairs(students))
})

app.get('/partners/:size', function (req,res){
	const size = req.params.size
	res.send(splitPairs(students, size))
})

// get method route
app.get('/', function (req, res) {
	// responds with hello world when a get request is made to the homepage
    res.send('Hello, World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
