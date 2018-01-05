"use strict";

function isObject(val) {
	let typeVar = Object.prototype.toString.call(val);

	if(typeVar == "[object Object]" ){
	    return true
	}

	return false;
}