$(document).ready(function(){	
	$(".fancybox").fancybox();
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
	
	//Background image
	// sourced from unsplash.com; reference source.unsplahs.com
	// background got to be dark for the styling/ fonts are light in color
	//var bgURL= 'https://source.unsplash.com/category/nature';
	var bgURL= 'https://source.unsplash.com/collection/292287/daily';
	$('body').css({
		'background-image':'url('+ bgURL +')',
		'background-repeat':'no-repeat',
		'background-size': 'cover'
	});
	
	//WEATHER
	$('#weather').weatherfeed(['USTX0542'], {
		forecast: true,
		wind: false,
		link: false,
		humidity: false,
		visibility: false,
	});

	//TIME
	function startTime() {
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var days = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
		var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Nov','Dec'];
		
		m = checkTime(m);
		h = checkTime(h);
		s = checkTime(s);
		
		//m = today.getHours()>12? m+'PM' : m+'AM';
		//h = h>12? parseInt(h)-12: h ;
		
		$('#time').html(h +'<span>:</span>'+ m +'<span>:</span>'+ s);
		//$('#time').html(h+'<span>:</span>'+m);
		$('#day').html(days[today.getDay()]+'day');
		$('#date').html(months[today.getMonth()-1]+' '+today.getDate()+', '+today.getFullYear());
		
		setTimeout(function(){startTime()},500);
	}

	function checkTime(i) {
		i=i<10? i='0'+i:i; 
		return i;
	}
	
	$('#time').html(startTime());
	
	//SET INIT VARIABLE
	var config;
	
	//SEARCH
	$('#currtype a').click(function(e){
		e.preventDefault();
	});
	
	$('#curreng a').click(function(e){
		e.preventDefault();
	});
	
	$('#search .engine .sel').click(function(e){
		e.preventDefault();
		var ce = $('#curreng').html();
		var se = $(this).html();
				
		$(this).html(ce);
		$('#curreng').html(se);
		
		setupSearch();
	});
	

	$('#search .type .sel').click(function(e){
		e.preventDefault();
		var ct = $('#currtype').html();
		var st = $(this).html();
		
		$(this).html(ct);
		$('#currtype').html(st);
		
		setupSearch();
	});
	
	$('#search').submit(function(e){
		e.preventDefault();	
		setupSearch();
	});
	
	function setupSearch(sEng,sType,sSite){
		var eng = $('#curreng a').attr('href');
		var type = $('#currtype a').attr('id');
		
		if(eng=='google.com'){
			site = false;
		}else{
			site = true;
		}
		
		config = {
			siteURL		: $('#curreng a').attr('href'),	
			searchSite	: site,
			type		: type,
			append		: false,
			perPage		: 8,			
			page		: 0
		}
		
		if($('#query').val()!=''){
			$('#resultsDiv').html('<p id="loading">loading...</p>');
			googleSearch();
		}
	}
	
	function googleSearch(settings){
		// If no parameters are supplied to the function,
		// it takes its defaults from the config object above:
		
		settings = $.extend({},config,settings);
		settings.term = settings.term || $('#query').val();
		
		if(settings.searchSite){
			// Using the Google site:example.com to limit the search to a
			// specific domain:
			settings.term = 'site:'+settings.siteURL+' '+settings.term;
		}
		
		// URL of Google's AJAX search API
		var apiURL = 'http://ajax.googleapis.com/ajax/services/search/'+settings.type+'?v=1.0&callback=?';
		var resultsDiv = $('#resultsDiv');
		
		$.getJSON(apiURL,{q:settings.term,rsz:settings.perPage,start:settings.page*settings.perPage},function(r){
			
			var results = r.responseData.results;
			$('#more').remove();
			
			if(results.length){
				
				// If results were returned, add them to a pageContainer div,
				// after which append them to the #resultsDiv:
				
				var pageContainer = $('<div>',{className:'pageContainer'});
				
				for(var i=0;i<results.length;i++){
					// Creating a new result object and firing its toString method:
					if(i==3){
						pageContainer.append(new result(results[i]) + '<div class="clear"></div>');
					}else{
						pageContainer.append(new result(results[i]) + '');
					}
				}
				
				if(!settings.append){
					// This is executed when running a new search, 
					// instead of clicking on the More button:
					resultsDiv.empty();
				}
				
				pageContainer.append('<div class="clear"></div>')
							 .hide().appendTo(resultsDiv)
							 .fadeIn('slow');
				
				var cursor = r.responseData.cursor;
				
				// Checking if there are more pages with results, 
				// and deciding whether to show the More button:
				
				if( +cursor.estimatedResultCount > (settings.page+1)*settings.perPage){
					$('<div>',{id:'more'}).appendTo(resultsDiv).click(function(){
						googleSearch({append:true,page:settings.page+1});
						$(this).fadeOut();
					});
				}
			}
			else {
				
				// No results were found for this search.
				
				resultsDiv.empty();
				$('<p>',{className:'notFound',html:'No Results Were Found!'}).hide().appendTo(resultsDiv).fadeIn();
			}
		});
	}
	
	function result(r){
		//Convert Youtube Url to embedded
		function convert(url){
			return url.replace('watch?v=','embed/')
		}
		
		// This is class definition. Object of this class are created for
		// each result. The markup is generated by the .toString() method.
		var arr = [];
		
		// GsearchResultClass is passed by the google API
		switch(r.GsearchResultClass){

			case 'GwebSearch':
				arr = [
					'<div class="webResult">',
					'<h2><a href="',r.unescapedUrl,'" target="_blank">',r.title,'</a></h2>',
					'<p>',r.content,'</p>',
					'<h3><a href="',r.unescapedUrl,'" target="_blank">',r.visibleUrl,'</a></h3>',
					'</div>'
				];
			break;
			case 'GimageSearch':
				arr = [
					'<div class="imageResult">',
					'<a target="_blank" href="',r.unescapedUrl,'" title="',r.titleNoFormatting,'" class="fancybox pic" rel="gal" style="background-image:url(',r.unescapedUrl,')" >',
					'</a>',
					'<div class="clear"></div>','<a class="various fancybox-media" href="',r.originalContextUrl,'" target="_blank">',r.visibleUrl,'</a>',
					'</div>'
				];
			break;
			case 'GvideoSearch':
				arr = [
					'<div class="imageResult">',
					'<a class="pic various fancybox.iframe" target="_blank" href="',convert(r.url),'?autoplay=1" title="',r.titleNoFormatting,'" style="background-image:url(',r.tbUrl,');">',
					'</a>',
					'<div class="clear"></div>','<a href="',r.originalContextUrl,'" target="_blank">',r.publisher,'</a>',
					'</div>'
				];
			break;
			case 'GnewsSearch':
				arr = [
					'<div class="webResult">',
					'<h2><a href="',r.unescapedUrl,'" target="_blank">',r.title,'</a></h2>',
					'<p>',r.content,'</p>',
					'<a href="',r.unescapedUrl,'" target="_blank">',r.publisher,'</a>',
					'</div>'
				];
			break;
		}
		
		// The toString method.
		this.toString = function(){
			return arr.join('');
		}
	}
	
});