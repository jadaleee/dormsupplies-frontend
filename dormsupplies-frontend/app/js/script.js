const form = document.forms[0]

function register() {
	var data = {}
	if (form.name.value) data.name = form.name.value
	if (form.email.value) data.email = form.email.value
	if (form.password.value) data.hash = form.password.value
	if (form.classYear.value) data.classYear = form.classYear.value
	if (form.address.value) data.address = form.address.value
	console.log(data)

// fetch takes this url and adds the string that we've given in index.js
	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	// pipes the res into this res below in then(function(res)
	}).then(function(res) {
		res.json()
		.then(function(user) {
			alert(JSON.stringify(user))
		})
	}).catch(function(err) {
		console.error(err)
	})
}

function addItem() {
	var data = {}
	if (form.name.value) data.name = form.name.value
	if (form.price.value) data.price = form.price.value
	if (form.quantity.value) data.quantity = form.quantity.value
	console.log(data)

// fetch takes this url and adds the string that we've given in index.js
	fetch('/addItem', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	// pipes the res into this res below in then(function(res)
	}).then(function(res) {
		res.json()
		.then(function(item) {
			alert(JSON.stringify(item))
		})
	}).catch(function(err) {
		console.error(err)
	})
}

function items() {
	fetch('/items', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'GET',
	}).then(function(res) {
		res.json().then(function(item){
			alert(JSON.stringify(item))
		})
	}).catch(function(err) {
		console.error(err)
	})
}

function success(values) {
	console.log(values)
	window.location = "/success"
}

// get all items