'use strict';

// 1. this in the Global Scope
console.log(this);
// (this = Window-Object)

// 2. this value in Regular Functions
const regularFun = function () {
	console.log(this);
	// Regular Functions has access to (this)
	// (this = undefined) in (strict mode) Otherwise, (this = Window-Object)
};
regularFun();

// 3. this value in Arrow Functions
const arrow = () => {
	console.log(this);
	// Arrow Functions doesn't have access to (this)
	// Arrow function takes (this) value from parent scope (which is global in this case)
	// so, (this = Window-Object) in this case
};
arrow();

// 4. this value in Event listener passed function
const h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
	console.log(this);
	// this = Dom Element that the handler attached to
});

// 5. this value in Object Method
const obj = {
	firstName: 'Mahmoud',
	method() {
		console.log(this);
		// this = Object calling the method
	}
};

obj.method();
