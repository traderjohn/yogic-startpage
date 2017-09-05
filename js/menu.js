/* Dropdown Menu *\
\*===============*/
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
	if (event.target.parentNode.matches('.link') && !settings.navigation.menu_auto_close){
	    // menu auto close? 
	    return;
	}

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

/*  Get Links  *\
\*=============*/
$(document).ready(function() {
	var shortcuts = {};
		
	function ProcessLinks( data ){
	    // this is the callback function
	    var linkString = data;

	    /*  Create Array from linkString  *	\
	    \*================================*/
	    var linkArray = linkString.split("\n");

	    /*  Go thru Array  *\
	    \*=================*/
	    var i;
	    var count = 1;
	    var html = '';

	    for(i in linkArray) {

		/*  Get line  *\
		\*============*/
		var line = jQuery.trim(linkArray[i]);

		// If line is empty, skip
		if(!line) continue;

		/* if it contains "title::",      *\
		|* then set the title of the page *|
		\*================================*/
		if(/title::/.test(line) == true){
		    var page_title = line.split("::")[1];
		    $('#fulltime #title').html(page_title);
		    $('title').html(settings.title.add_symbol +' '+ page_title);
		    continue;
		}

		/* if it contains "background::", *\
		|* then set the background of the *|
		|* page                           *|
		\*================================*/
		if(/background::/.test(line) == true){
		    var bg_link = line.split("::")[1];
		    $('body').css({'background-image':'url('+ bg_link +')'});
		    console.log('custom background image found. setting it to '+ bg_link);
		    continue;
		}

		/*  If it doesn't contain "://",  *\
		|*  it's not a URL                *|
		\*================================*/
		if(/:\/\//.test(line) != true) {
			if(count > 1) {
				html = html + '</ul>';
			}
			html = html + '<ul><li class="title" onclick="dropdownToggle(this)">'+ line + '</li>';
			count++;
			continue;
		}

		/*  Split URL, Title and icon (if any) *\
		\*=====================================*/
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];
		
		var icon = "";
		if (lineArray[3]) {
			icon = lineArray[3];
		}
		
		/*  Add to shortcuts array *\
		\*=========================*/
		if(lineArray[2]) {
			shortcuts[lineArray[2]] = "'"+url+"'";
		}

		/* Prepares HTML code for showing icon *\
		\*=====================================*/
		var iconHtml = '';
		if (settings.icons.showIcons && icon) {
			iconHtml = '<img src="' + icon + '"/>'; 
		}

		/*  Add HTML code  *\
		\*=================*/
		if(settings.navigation.newWindow) {
			html = html + '<li class="link">' + iconHtml + '<a href="' + url + '" target="_blank">' + title + '</a></li>'
		}
		else {
		    html = html + '<li class="link">' + iconHtml + '<a href="' + url + '">' + title + '</a></li>'
		}
	    }

	    /*  Add generated content to page  *\
	    \*=================================*/
	    html += '</ul>';
	    html += '<div class="clear"></div>';
	    //$('#bm').append(html);
	    $('#bm').html(html);
	    
	    if (settings.fonts.toUpper){
		$('.title').css('text-transform','uppercase');
	    }
	    
	    /*  Keybindings  *\
	    \*===============*/

	    var typed = '';
	    var shortcutArray = Object.keys(shortcuts);
	    var typedDate = new Date();
		
	    // Check if we typed a keybinding
	    function hasSubstring(element) {
		var index = typed.indexOf(element);
		if(index >= 0) {
		    var sliced = typed.slice(index, typed.length);
		    typed = ''; // Clean typed, so that we can watch for the next keybinding
		    if(settings.navigation.newWindow) {
			window.open(eval(shortcuts[sliced]));
		    } else {
			window.location.replace(eval(shortcuts[sliced]));
		    }
		}
	    }

	    // React on keypress
	    $(window).keypress(function(e) {
		    // If we're in an input, we don't want to interpret the keypresses
		    $('input').keypress(function(e) {
			    e.stopPropagation();
			});
		    var nowDate = new Date();
		    var diffMs = (nowDate - typedDate);
		    if (diffMs > 1000) {	
			typed = String.fromCharCode(e.which);
		    } else {
			typed = typed + String.fromCharCode(e.which);
		    }
		    typedDate = new Date();
		    shortcutArray.some(hasSubstring);
		});

	}
	
	/* The CALL! *\
	\*===========*/
	var link_path = settings.links_path;
	if (Array.isArray(link_path)){
	    link_path = link_path[0];
	    //\ use first file in the list as default
	    console.log('Multiple links provided; using '+ link_path +' as default.');
	}
	$.get( link_path, ProcessLinks, 'text');
	window.ProcessLinks = ProcessLinks;
	//\ give the function ProcessLinks() global scope
});
