// Function #1 - Presidents

var presidents = ['Washington','Adams','Jefferson','Madison','Monroe'];

function loopFunc(presidents) {
	for (var i = 0; i < presidents.length; i++) {
		
		console.log("Value of 'i' is: " + i);
		console.log("Value at index is: " + presidents[i]);
	}
}
loopFunc(presidents);

// Function #2 - The String of Numbers

var stringOfNumbers = '';

for (var i = 10; i <= 20; i++) {
	stringOfNumbers += i;
}
console.log(stringOfNumbers);

// Function #3 - Add Only Even Numbers to an Array

var evenNumberArray = []; 

for (var i = 0; i <= 100; i += 2) {
	evenNumberArray.push(i);
}

console.log(evenNumberArray);