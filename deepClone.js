"use strict";

function deepClone(o) {
	/* 
	    Handles array; objects and array of objects
	    Will fail: regex, boolean,date object 
	*/
	let isOb = this.isObject(o);

	let output = (isOb) ? {} : [];

	for(let i in o){
	    let elem = o[i];
	    output[i] = (this.isObject(elem) || this.isArray(elem)) ? this.deepCopy(elem) : elem;
	}

	return output;
}