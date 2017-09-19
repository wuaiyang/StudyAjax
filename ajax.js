function ajax(method,url,data,success){
	var xhr = null;
    /*if(window.XMLHttpRequest){
    	xhr = new XMLHttpRequest();
    }else{
    	xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }*/
    
    try {
    	xhr = new XMLHttpRequest();
    } catch(e) {
    	xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    if(method == 'get'&& data){
       url += '?' + data;
    }
    
    xhr.open(method,url,true);

    if(method == 'get'){
    	xhr.send(null);
    }else{
    	xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    	xhr.send(data);
    }
    
    
    xhr.onreadystatechange = function(){
    	if(xhr.readyState == 4){
             if(xhr.status == 200){
                success && success(xhr.responseText);
             }else{
                alert('Err:'+ xhr.status)
             }
    	}
    }
    }