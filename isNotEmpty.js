"use strict";

import isArray from isArray;
import isObject from isObject;

/* Checks if array or object is not empty */
function isNotEmpty(val) {
    
    if(isObject(val)){
        
        let keys = Object.keys(val);

        let len = keys.length;

        if(len > 0){
            return true;
        }

        return false;
    }else if(isArray(val)){
        let len = val.length;

        if(len > 0){
            return true;
        }

        return false;            
    }

    return false;    
}