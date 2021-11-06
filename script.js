'use strict';

console.log(this);
// (this = Window-Object) -> (this) value in the global scope

const regularFun = function () {
	console.log(this);
	// Regular Functions has access to (this)
	// (this = undefined) in (strict mode) Otherwise, (this = Window-Object)
};
regularFun();

const arrow = () => {
	console.log(this);
	// Arrow Functions doesn't have access to (this)
	// arrow function takes (this) value from parent scope (which is global in this case)
	// so, (this = Window-Object) in this case
};
arrow();

document.querySelector('h1').onclick = function () {
	console.log(this);
	// this = Dom Element that the handler attached to
};

const obj = {
	firstName: 'Mahmoud',
	method() {
		console.log(this); // this = object calling the method
	}
};

obj.method();
