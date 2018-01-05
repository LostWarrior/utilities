"use strict";

function loadJSON(url,callback){
	let xobj = new XMLHttpRequest();

	xobj.overrideMimeType("application/json");
	xobj.open('GET', url , false);

	xobj.onreadystatechange = function() {
	    if (xobj.readyState == 4 && xobj.status == "200") {
	        /* open will return undefined in async mode */
	        callback(xobj.responseText);
	    }
	}
	xobj.send(null);	
}