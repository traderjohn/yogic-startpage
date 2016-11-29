/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    "links_path": "links_test.txt",
	
    "navigation": {
	"newWindow": true,
	"menu_auto_close": false
    },

    "fonts":{
	"body": "Trebuchet MS",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
    },
    
    "icons": {
	"showIcons": false
    },

    "clock": {
	"IsMilitary": true
    },

    "weather": {
	"show": true,
	"geolocate": false,
	"default_loco": "Hong Kong, Hong Kong"
    },
    
    "background": {
	"source":{
	    "baseUrl": "https://source.unsplash.com/collection/",
	    "dayColId":"407887",
	    "nightColId":"407877",
	    "dawnColId": "407882",
	    "duskColId": "407878"
	},
	"daily": false
    },
	
    "search": {
	"engines": [
		    ["http://google.com/search", "q","GOOGLE"],
		    ["http://images.google.com/search", "q","GImg"],
		    ["http://google.com/maps", "q", "GMap"],
		    ["http://google.com/news", "q", "GNews"],
		    ["http://youtube.com/results", "search_query", "YouTube"],
		    ["http://soundcloud.com/search/sounds", "q", "SoundCloud"],
		    ["http://bing.com/search", "q", "Bing"],
		    ["http://github.com/search", "q", "GitHub"],
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["http://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	"showQuotes": true,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
		  //"You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "the Universe is in us. ~ Neil DeGrasse Tyson",
		  "What you seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
