/*****************************************************************************************************************************
* Unified differences of Web Browser
*
*****************************************************************************************************************************/


/**
 *  
 * @returns {request|ActiveXObject|XMLHttpRequest}
 */
function createRequest(){
    try{
        request=new XMLHttpRequest();// Safari Firefox Opera etc
    }catch(tryMS){
        try{
            request=new ActiveXObject("Msxm12.XMLHTTP");
        }catch(otherMS){
            try{
                request=new ActiveXObject("Microsoft.XMLHTTP")
            }catch(failed){
                request=null;
            }
        }
    }
    return request;
}

/**
 * 
 * @param {type} arg
 * @returns {Boolean}
 */
function isArray(arg){
    if (typeof arg=='object'){
        var criteria=arg.constructor.toString().match(/array/i);
        return (criteria != null);
    }
    return false;
}

/**
 * 
 * @param {type} e
 * @returns {window.event.srcElement|Window.event.srcElement|e.srcElement|e.target}
 */
function getActivatedObject(e){
    var obj;
    if (!e){
        //early version of IE
        obj=window.event.srcElement;
    }else if (e.srcElement){
        //IE 7 nad later
        obj=e.srcElement;
    }else{
        //DOM Level 2 browser
        obj=e.target;
    }
    return obj;
}

/**
 * 
 * @param {type} obj
 * @param {type} eventName
 * @param {type} handler
 * @returns {null}
 */
function addEventHandler(obj,eventName,handler){
    if (document.attachEvent){
        //Microsoft 
        obj.attachEvent("on"+eventName,handler);
    }else if(document.addEventListener){
        //DOM Level 2
        obj.addEventListener(eventName,handler,false);
    }
}



/*****************************************************************************************************************************
* Some useful sequence set 
*
*****************************************************************************************************************************/
/**
 * append node across two level of DOM Tree
 * establish pa node and append to grandpa,
 * append node to pa node
 * @param {Node} grandpa grandpa node
 * @param {String} pa_type
 * @param {String} pa_id
 * @param {Node} node
 * @returns {null}
 */
function two_level_append(grandpa, pa_type, pa_id, node){

    var pa=document.createElement(pa_type);
    pa.id=pa_id;
    pa.appendChild(node);
    grandpa.appendChild(pa);
    
    
}