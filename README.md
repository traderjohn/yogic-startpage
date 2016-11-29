The Yogic StartPage
===================

## Intro
What defines a good start page? From one yogi to another, I think a good startpage simply has the follow mission:
1. Inspire stillness & reminding us of who we really are.
2. Functional with a minimal focus: no distractions, just giving you the start points that you need.
3. 

## Credits
All my ideas are just merely recombination of other people's thoughts. We don't own anything.
* Layout inspiration: Imwebdesign
* Weather:
* Links organization: 

## Configuration:

## Installation:
### I. Hosting on your own server
### II. As local file for browser New Tab

## To-do
- [ ] optional Moon Phase display next to the weather icon
- [ ] optional Sunrise and Sunset time next to the weather icon
- [ ] Clickable Switch for opening links in New Window
- [ ] Countdown or Stop watch button
- [ ] Arrow keyboard netvigation for links
- [ ] Hotkey Search box activation 


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
