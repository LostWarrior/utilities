"use strict";

function isArray(val){
	let typeVar = Object.prototype.toString.call(val);
	
	if(typeVar == "[object Array]" ){
	    return true
	}

	return false;
}