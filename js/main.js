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
	
})