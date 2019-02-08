let myData = [];
let btn = document.getElementById('btn');
let name = document.getElementById('name');
let input = document.getElementById('search');

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(res => {
	myData = res.slice(0,10)
	console.log(myData)
})
btn.addEventListener('click' , function(){
	let inpVal = document.getElementById('search').value;
	let result = myData.filter(item => item.name === inpVal);
	name.innerHTML = result[0].name;
	document.getElementById('city').innerHTML = result[0].address.city;
	document.getElementById('street').innerHTML = result[0].address.street;
	document.getElementById('suite').innerHTML = result[0].address.suite;
	document.getElementById('zip_code').innerHTML = result[0].address.zipcode;
	document.getElementById('company').innerHTML = result[0].company.name;
	document.getElementById('email').innerHTML = result[0].email;
	document.getElementById('username').innerHTML = result[0].username;
	document.getElementById('site').innerHTML = result[0].website;
	document.getElementById('phone').innerHTML = result[0].phone;
})