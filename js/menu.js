// Dropdown Menu
function dropdownToggle(arg1){
    var nCount= arg1.parentNode.childNodes.length;
    for (i = 0; i < nCount; i++){
	var iNode= arg1.parentNode.childNodes[i];
	if( iNode.className == 'link'){
	    //console.log('showing link '+ i);
	    if (iNode.style.display== 'none'){
		iNode.style.display= 'block';
	    }else{
		iNode.style.display= 'none';
	    }
	}
    }
}

window.onclick= function(event){
    if (!event.target.matches('.title')){
	    var dropdowns = document.getElementsByClassName('link');
	    var i;
	    for (i = 0; i < dropdowns.length; i++){
		var openDropdown = dropdowns[i];

		//console.log("closing link "+ i);
		if (openDropdown.style.display== 'block'){
		    openDropdown.style.display= 'none';
		}
	    }
	}
}