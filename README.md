The Yogic StartPage
===================

## Demo
See demo [here](http://johnho.ca/startpage)

## Intro
What defines a good start page? From one yogi to another, I think a good startpage simply has the follow missions:  
1. Inspire stillness & remind us of who we really are.  
2. Functional with a minimal focus. No distractions, just YOU and your links.  
3. Easy to [configure](#configuration)  

How does the Yogic StartPage do this?  
1. Only the relevant links/ bookmarks and search engines configured by YOU  
2. Amazing background image from [Unsplash](http://unsplash.com)  
3. Simple, minimalist functions and design in HTML & Javascript.  

## Credits
We don't own anything. Anything we know are merely combination of ideas that have once been taught or shown to us by others we met in this life time.

> If you wish to make an apple pie from scratch, you must first invent the universe.
> ~_Carl Sagan_

Everything belongs to the universe. 

* Layout inspiration: [lmwebdesign](https://github.com/lmwebdesign/startpage)
* Weather plugin: [Simple Weather JS](http://simpleweatherjs.com)
* Weather Fonts: [Weather-icons by Erik Flowers][https://cdnjs.com/libraries/weather-icons]
* Links organization: [crshd](https://github.com/crshd/startpage)

## Configuration
This startpage is designed so that if you know how to edit a text document, you can configure it easily. You'll only have to be concerned with **two** files that you should open up in a text editor (I recommend [TextWrangler](https://itunes.apple.com/us/app/textwrangler/id404010395?mt=12) for Mac and Notepad.exe for Windows):

### links.txt
links in links.txt should be in the following format  

```
http://your-link-here.com | Your Link's Name
http://google.com | Google Search
```

That is, the URL must start with either **http://** or **https://**. And there **must** be one empty space in front of and immediately after the **|** sign.

### js/settings.js
The settings.js file defines a big settings object that's referenced by all the other pieces of this project.

```javascript
var settings = {
    "links_path" : "links.txt",
    
    "title" : "&#2384 Here & Now",
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Clear Sans",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
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
	//\_ should background picture in each collection be only updated once per day?
    },
	
    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
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
	//\_ should the search box be selected on load?
	"showQuotes": true,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
		  //"You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "the Universe is in us. ~ Neil DeGrasse Tyson",
		  "What yOu- seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
```

For how to pick the right font for your startpage, check out [this article](https://designschool.canva.com/font-design/)

## Installation:

### I. As local file for your browser
1. [Download](https://github.com/traderjohn/yogic-startpage/archive/master.zip) and unzip the file in a local directory of your choice.  
2. Edit the links.txt (and js/settings.js) file per the [config section](#configuration)
3. Change your browser settings to point to the downloaded **index.html** (for example: _file://Users/johnho/Documents/yogic-startpage/index.html_)  
  * [Chrome](http://wikihow.com/Change-Your-Homepage-on-Chrome): in Step 4 input the local path to index.html  
  * [Firefox](http://wikihow.com/Change-Your-Start-Page-on-Mozilla-Firefox)
  * [Opera & Safari](http://www.makeuseof.com/tag/quick-and-easy-safari-and-opera-start-page-customization/)

### I. Hosting on your own server
1. [Download](https://github.com/traderjohn/yogic-startpage/archive/master.zip) and unzip the file in a local directory of your choice.  
2. Edit the links.txt (and js/settings.js) file per the [config section](#configuration)
3. Make a new directory for the startpage in your webserver
4. Upload the files to the target webserver directory

## To-do stack
- [ ] optional Moon Phase display next to the weather icon
- [ ] optional Sunrise and Sunset time next to the weather icon
- [ ] change background base on Sunrise and Sunset time from the weather info
- [ ] Clickable Switch for opening links in New Window
- [ ] Countdown or Stop watch button
- [ ] Arrow keyboard netvigation for links
- [ ] Hotkey Search box activation 
- [ ] Make links Icon work
- [ ] Use font matters for Search Engine list
- [ ] create link for the search type to the current search engine
- [ ] get autocomplete from the respective search engine as you type in the input box

## Support
Log issues [here](https://github.com/traderjohn/yogic-startpage/issues).

To collaborate with me for other project interest, you can email me at iam [at] johnho.ca.
