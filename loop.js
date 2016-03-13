// Function #1 - Presidents

var presidents = ['Washington','Adams','Jefferson','Madison','Monroe'];

function loopFunc(presidents) {
	for (var i = 0; i < presidents.length; i++) {
		
		console.log("Value of 'i' is: " + i);
		console.log("Value at index is: " + presidents[i]);
	}
}
loopFunc(presidents);

// For loop #2 - The String of Numbers

var stringOfNumbers = '';

for (var i = 10; i <= 20; i++) {
	stringOfNumbers += i;
}
console.log(stringOfNumbers);

// For loop #3 - Add Only Even Numbers to an Array

var evenNumberArray = []; 

for (var i = 0; i <= 100; i += 2) {
	evenNumberArray.push(i);
}

console.log(evenNumberArray);

// For loop #4 - Accessing Only the Odd Indexes of an Array

var oopsArray = [ 'turn' , '' , 'down' , '' , 'for' , '' , 'what' ];

for (var i = 1; i < oopsArray.length; i += 2) {
	oopsArray.splice(i, 1, 'nope');
}
console.log(oopsArray);

// For loop #5 - Going Backwards ?!?

for (var i = oopsArray.length-1; i > 0; i--) {
	console.log(oopsArray[i]);
}

// For Loop #6 - isNapTime

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule){
	if (schedule === true) {
		console.log("ZzZzZzZz");
	}else{
		console.log("Gotta get to work!");
		var isNapTime = true;
	}
}

for (var i = 0; i < napSchedule.length; i++) {
	var answer = nap(napSchedule[i]);
}

// For Loop 7 - CopyArray

var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray(originArray, destinationArray){
	for (var i = 0; i < originArray.length; i++) {
		destinationArray.push(originArray[i]);
	}
}
copyArray(valuesArray, copyOfValuesArray);
console.log(copyOfValuesArray);
