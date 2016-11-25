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
    
    "icons": {
	"showIcons": false
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
		    ["http://google.com/search", "q","google"],
		    ["http://google.com/images", "q","GImg"],
		    ["http://google.com/maps", "q", "GMap"],
		    ["http://google.com/news", "q", "GNews"],
		    ["http://youtube.com/results", "search_query", "youtube"],
		    ["http://soundcloud.com/search/sounds", "q", "soundcloud"],
		    ["http://bing.com/search", "q", "bing"],
		    ["http://github.com/search", "q", "github"],
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["http://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	"showQuotes": true,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "What you seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
