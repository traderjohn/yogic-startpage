/* Background, Weather, Time, and Search setup *\
\*=============================================*/

$(document).ready(function(){		
	//Background image
	// sourced from unsplash.com; reference source.unsplahs.com
	// background got to be dark for the styling/ fonts are light in color
	//var bgURL= 'https://source.unsplash.com/category/nature';
	var bgBaseUrl= settings.background.source.baseUrl;
	var dayColId= settings.background.source.dayColId;
	var nightColId= settings.background.source.nightColId;
	var dawnColId= settings.background.source.dawnColId;
	var duskColId= settings.background.source.duskColId;
	var bgURL= bgBaseUrl;

	var curD= new Date();
	var curH= curD.getHours();
	if (curH >= 5 && curH< 7){
	    bgURL += dawnColId;
	}else if (curH >= 7 && curH< 18){
	    bgURL += dayColId;
	}else if (curH >= 18 && curH< 20){
	    bgURL += duskColId;
	}else {
	    bgURL += nightColId;
	};

	if(settings.background.daily){
	    bgURL= bgURL + '/daily';
	}

	$('body').css({
		'background-image':'url('+ bgURL +')',
		'background-repeat':'no-repeat',
		'background-size': 'cover'
	});
	
   	//WEATHER
	var bolShowWeather= settings.weather.show;
	var bolGeoLocate= settings.weather.geolocate;
	var strLoco = settings.weather.default_loco;
	if (navigator.geolocation && bolShowWeather && bolGeoLocate ){
	    navigator.geolocation.getCurrentPosition(function(position){
		    loadWeather( position.coords.latitude + ',' + position.coords.longitude);
		});
	}else if( bolShowWeather){
	    loadWeather(strLoco);
	}
	function loadWeather(strLoco, woeid){
	    $.simpleWeather({
		    location: strLoco,
			woeid: '',
			unit: 'c',
			success: function(weather) {
			html = '<h2 class="weatherHead"><i class="wi wi-yahoo-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			html += '<ul class="weatherDetail"><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li></ul>';
			
			var wLink = settings.weather.link;
			if(wLink!=''){
			    html = '<a href="'+ wLink +'" target="_blank" title="Check out the weather at '+ wLink.split("//")[1] +'">' + html;    
			    html += '</a>';
			}
			
			$("#weather").html(html);
		    },
			error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		    }
		});
	}
	
	//TIME
	function startTime() {
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var days = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
		var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
		
		m = checkTime(m);
		h = checkTime(h);
		s = checkTime(s);
		
		if(!settings.clock.IsMilitary){
		    s = today.getHours()>12? s+'<p>pm</p>' : s+'<p>AM</p>';
		    h = h>12? parseInt(h)-12: h ;
		    
		    $('#time').css('font-size','3em');
		}

		$('#time').html(h +'<span>:</span>'+ m +'<span>:</span>'+ s);
		//$('#time').html(h+'<span>:</span>'+m);
		$('#day').html(days[today.getDay()]+'day');
		$('#date').html(months[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear());
		
		setTimeout(function(){startTime()},500);
	}

	function checkTime(i) {
		i=i<10? i='0'+i:i; 
		return i;
	}
	
	$('#time').html(startTime());
	
	//SEARCH
	
	// print it first then mess with it
	printSearchEng();
	setupEngineList();

	function deactivateSearchClick(){
	    $('#currtype a').click(function(e){
		    e.preventDefault();
		});
	    
	    $('#curreng a').click(function(e){
		    e.preventDefault();
		});
	}
	
	function setupEngineList(){
	    $('#search .engine .sel').click(function(e){
		    e.preventDefault();
		    var ce = $('#curreng').html();
		    var se = $(this).html();

		    $(this).html(ce);
		    $('#curreng').html(se);
		    
		    var isSearch = $('#currtype a').html() =='M';
		    if (isSearch){ //set search engine source
			var searchUrl = $('#curreng a').attr('href');
			var searchVarName = $('#curreng a').attr('id');
			console.log('Setting search engine to '+ searchUrl);
			setupSearch(searchUrl, searchVarName);
		    }else{         //set links source
			var link_path = $('#curreng a').html();
			console.log('Setting links source to '+ link_path);
			$.get(link_path, ProcessLinks, 'text');
		    }
		});
	}

 	function printSearchEng(){
 	    var arrSearch = settings.search.engines;
 	    var strHTML='';
 	    var i;
 	    for (i in arrSearch){
 		var iSrch = arrSearch[i];
 		var strURL = iSrch[0];
 		var strID = iSrch[1];
 		var strLabel = iSrch[2];
 		var isCurr = false;
 		if (i==0){
 		    isCurr= true;
 		}
 		strHTML += writeSearchOpt(strURL, strID, strLabel, isCurr);
		
 		if (isCurr){
 		    strHTML += '<ul class="sub">';
		}
	    }
	    strHTML += '</ul></li>';
	    $('#search .engine').html(strHTML);
	}
	

	function writeSearchOpt(strURL, strID, strLabel, isCurr){
	    var strOutput = '<a href="' + strURL + '" id="' + strID + '">' + strLabel + '</a>';
	    if (isCurr) {
		strOutput = '<li class="first"><p id="curreng">'+ strOutput + "</p>";
	    } else {
		strOutput = '<li class="sel">' + strOutput + '</li>';
	    }
	    return strOutput;
 	}

	function getRandInt(min, max){
	    return Math.floor(Math.random() * (max - min +1)) + min;
	}

  	function setupSearch(searchURL, searchVarName){
	    if (!searchURL && !searchVarName){
		var sURL = $('#curreng a').attr('href');
		var sVName= $('#curreng a').attr('id');
		$('#search').attr('action', sURL);
		$('#search #query').attr('name', sVName);
		$('#search #query').val('');
	    } else {
		$('#search').attr('action', searchURL);
		$('#search #query').attr('name', searchVarName);
		}

	    // put quotes in search input box?
	    var arrayQuotes = settings.search.quotes;
	    var strPlaceholder = arrayQuotes[getRandInt(0, arrayQuotes.length-1 )];
	    if (settings.search.showQuotes){
		$('#search #query').attr('placeholder', strPlaceholder);
	    }

	    // new window?
	    if( settings.navigation.newWindow){
		$('#search').attr('target', '_blank');
	    }
	    
	    // give focus
	    if (settings.search.focusSearch){
		$('#search #query').focus();
	    }

	    // override search engine click
	    deactivateSearchClick();
	}
	
	// clear search box after search (wait for 1 sec)
	$('#search').on('submit',function(e){
		var QueryObj = $('#search #query');
		console.log('Searched for "'+ QueryObj.val() +'"');
		setTimeout(function(){
			QueryObj.val('');			
		    }, 1000);
	    });

	setupSearch();

	// LINKS SOURCE
	printLinkSourceToggle(); // must print it first before we can mess with click events

	$('#search .type .sel').click(function(e){
		e.preventDefault();
		var ct = $('#currtype').html();
		var st = $(this).html();
		var wasEng = $('#currtype a').html()=='M';
		
		$(this).html(ct);
		$('#currtype').html(st);
		
		if (wasEng){
		    printLinkSources();
		    setupEngineList();
		    console.log('Links source file list loaded.');
		}else{
		    printSearchEng();
		    setupEngineList();
		    setupSearch();
		    console.log('Search Engine list loaded.');
		}
	});
 	
	function printLinkSourceToggle(){
 	    var arrLinks = settings.links_path;
	    var strHTML = '<li class="first"><p id="currtype"><a href="#">M</a></p>';

	    if (Array.isArray(arrLinks)){
	        strHTML +='<ul class="sub"><li class="sel"><a href="#">D</a></li></ul></li>';
		$('#search .type').append(strHTML);
	    }
	    $('#search .type .first a').attr('title', 'search engine list toggle mode');
	    $('#search .type .sub a').attr('title', 'links source file toggle mode');
	}

 	function printLinkSources(){
 	    var arrLinks = settings.links_path;
	    var strHTML = '<li class="first" id="linksrc"><p id="curreng"><a href="#">'+ arrLinks[0] +'</a></p><ul class="sub">';

	    if (Array.isArray(arrLinks)){
		var i;
		for (i=1; i< arrLinks.length; i++){
		    var iPath = arrLinks[i];
		    strHTML += '<li class="sel"><a href="#">'+ arrLinks[i] + '</a></li>';
		}
		strHTML += '</ul></li>';

		$('#search .engine').html(strHTML);
	    }
	}

	// USER CONFIG FONTS
	function styleFonts(){
	    var strBodyFont= settings.fonts.body;
	    var strLinksFont= settings.fonts.links;
	    $('body').css('font-family', strBodyFont);
	    $('#bm').css('font-family', strLinksFont);
	    
	}
	styleFonts();
	
	// PAGE TITLE
	$('#fulltime #title').html(settings.title.default);
	$('title').html(settings.title.add_symbol +' '+ settings.title.default);
});