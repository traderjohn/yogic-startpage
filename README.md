The Yogic StartPage
===================

## Intro
What defines a good start page? From one yogi to another, I think a good startpage simply has the follow missions:
1. Inspire stillness & remind us of who we really are.
2. Functional with a minimal focus. No distractions, just YOU and your links.
3. Easy to [configure](##configuration)

How does the Yogic StartPage do this?
1. Only the relevant links/ bookmarks and search engines configured by YOU
2. Amazing background image from [Unsplash][http://unsplash.com]
3. Simple, minimalist functions and design in HTML & Javascript.

## Credits
We don't own anything. Anything we know are merely combination of ideas we have all once read, heard, or learnt.

Everything belongs to the universe. 

* Layout inspiration: Imwebdesign
* Weather plugin: [Simple Weather JS][http://simpleweatherjs.com]
* Weather Fonts: [Weather-icons by Erik Flowers][https://cdnjs.com/libraries/weather-icons]
* Links organization: 

## Configuration
This startpage is designed so that if you know how to edit a text document, you can configure it to your liking. You'll only have to be concerned with **two** files that you should open up in a text editor[ref]:

### links.txt

### js/settings.js
For how to pick the right font for your startpage, check out [this article][https://designschool.canva.com/font-design/]

## Installation:
### I. Hosting on your own server
### II. As local file for browser New Tab

## To-do
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

# Support
Log issues [here].

To collaborate with me for other project interest, you can email me at iam [at] johnho.ca.






This is a browser Start Page, it has the time, local 5 day forecast, links to commonly visited websites, and a search form that runs on Google's API.

<h2>Libraries Uses:</h2>
ZWeatherFeed - http://www.zazar.net/developers/jquery/zweatherfeed/ <br/>
FancyBox - http://fancyapps.com/fancybox/ <br/>
Google Search - http://tutorialzine.com/2010/09/google-powered-site-search-ajax-jquery/ <br/>

<h2>Edit:</h2>
Weather Edit - replace with your weather code
```
$('#weather').weatherfeed(['USTX0542']...
```

Remove/add new websites to search by editing the list below:
```
	<li class="sel"><a href="kat.ph" id="kat">kat.ph</a></li>
	<li class="sel"><a href="soundcloud.com" id="sc">soundcloud</a></li>
	<li class="sel"><a href="youtube.com" id="yt">youtube</a></li>
	<li class="sel"><a href="vimeo.com" id="vm">vimeo</a></li>
```

Edit the list below for search types, must be at least one or a combinations of the following:
```
  <a href="#" id="web">M</a>
  <a href="#" id="images">I</a>
	<a href="#" id="video">V</a>
	<a href="#" id="news">D</a>
```						


Search can be buggy when searching something other than YouTube and Google.
The style is basic and minimal, edit as you please. Enjoy!
