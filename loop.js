var presidents = ['Washington','Adams','Jefferson','Madison','Monroe'];

function loopFunc(presidents) {
	for (var i = 0; i < presidents.length; i++) {
		
		console.log("Value of 'i' is: " + i);
		console.log("Value at index is: " + presidents[i]);
	}
}
loopFunc(presidents);