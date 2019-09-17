# NBA Greatest Trio Interactive Data Dashboard

### Stream Two Project: Interactive Frontend Development - Code Institute

Website features a seven charts plus three players portfolio on top of the page where you can
get famialiar with the NBA heroes that developer wanted to present.
Firstly when you will see loading page
where css typewriter kicks off and you will see one the most famous Micheal Jordan quotes.
The See stats button will take u down to actual charts, where all the fun begins.
[Wireframes](https://github.com/tomciosegal/NBA_greatest_trio/tree/master/wireframes) 
for the dashboard can be found in the assets folder of the repository.
A live desktop demo can be found [here](https://tomciosegal.github.io/NBA_greatest_trio/).


The goal was to:
- attract NBA fans with charts that with show  clear overlook of the most important stats
- help all viewers comapare those three magnificent players  
- attract more fans and make them intrested in history of NBA
- introduce this three amazing NBA starts to public

## UX
Type of targeted viewer

Targeted Viewer is:
- Age from 12
- Loves NBA games.
- Specialy for fans of those three players, but also for new viewer.
- Viewer likes to comapre data.
- Easy to introduce to new viewers.

###### Visitors to this website are searching for:
- basic data related to our players
- simplicity and clariti of the charts
- clearly displayed data

This website is the best way to help them achieve these things because:

- most of this kind of website present overloaded charts with data
- other websites give to many info on one website so viewer is overwhelmed

This website is:
- very easy and quick to navigate.
- steps the visitor through easy to find and clear information
- very clear straightforward content "home" button "see stats" button
- easy guidance  thru the website
- every player has asigned color in the portfolio that will represent him thruout the website.
  that gives a viewer an great UX expierience and makes charts more clear to read and analise.
- go to the top button gives also simplicity to navigate
- refresh button availble all the time so you can refresh the charts

Visitors looking to:

-As a new visitor to the website, I want to easily navigate the site,where I can find all info efficiently.
-As an interested visitor, I want an easy find a stats and be able to compare them all.
-As a new visitor to the website, I want learn more about the players(Portfolio).
-As a potential new NBA fan, I want website to be clear easy to navigate and all data easy to read and analise or compare.


## Features

Page features a responsive fixed navigation bar with "Home" "Refresh Graph" buttons.  

##### Loading Page
The Loading Page section features a typrewritter (for large screens only)function featuring Micheal's Jordan famous quote.
there is no need for viewer to wait for entire quote to load,you can click on stat button anytime.
On mobile and tablet devices this feature is not avilible. 
After clicking "See stats" button you will be taken strait to the site with graphs.
Simple easy to navigate and hassleless.

The backgroung for large screens was uploaded from [Pixabay](https://pixabay.com/) and makes feel you really want to play basketball.

##### Portfolio
The Portfolio section features all three players that are given different backgrounds, so later they will be identify with these colors.

 The Portfolio section also includes some brief info 
 about every player like:
- Date of birth
- Titles won by player
- Team played
- Total games played

This section is sort of introduction to the viewers, so they have a picture who's stats are compared on this site.

##### Charts

Strait  after that an actaul charts with stats will show, along with a scroll up arrow which will come up
while reaching to end of first charts.This allow viewer quick navigation on the website.
When u scroll  further down you will be able to compare players highest point in the season during entire carrier,
and the salary that they were earning during that time.
On the very bottom the page you will find three horizontal scrolling charts that show asssits, blocks and steals
gained in every year. Every player has his own chart in this row.
Most importantly under every single chart viewer has "See comment" button. It will give you some brief info 
about every single chart.
The very last button is sort of summary, and leave a viewier with an impresion that you can choose your own
player as a winner.

##### Footer
Small brief footer with as little info as possible just becouse this is not most important for this sort ofwebsite.
The only features you is:
- copyright
- Github link to developers respositories
- lastly the link to the source that data was used from

In overall enough information to satisfy curiosity without overwhelming the user with all data presented.


## Technologies Used
This project uses HTML and CSS programming languages.

- [Google Fonts](https://fonts.google.com/)
The project uses Google fonts to style the website fonts.

 - [jQuery]( https://jquery.com/)
The project uses jQuery to reference Javascript needed for the button hovering, displaying or hiding items on website.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses JavaScript to add interactivity to the dashboard and to retrieve certain data from CSV files for graphs and charts.

- [Bootstrap (ver 4.3.1)](https://getbootstrap.com/)
    - The project uses the Bootstrap 4 grid and components in order to achieve a responsive layout.

- [crossfilter.js (v 1.3.12)](https://square.github.io/crossfilter/)
    - The project uses the Crossfilter.js library in order to create dimensions and groups from the datasets that could then be used to build charts using DC.js.

- [dc.js (v 2.1.8)](https://dc-js.github.io/dc.js/)
    - The project uses the DC.js library in order to build graphs and charts from the prebuilt chart types included in the library.

- [d3.js (v 3.5.17)](https://d3js.org/)
    - The project uses D3.js order to style the prebuilt charts included in DC.js

- [queue.js (v 1.0.7)](https://www.npmjs.com/package/queue)
    - The project uses Queue.js in order to bind to the external datasets in the Data folder, as well as to defer the rendering of the charts until all of the required datasets are fully imported.
  

## Testing

It was tested continually as I developed it, in Firefox Developer and Chrome, 
using both Firefox and Chromium developer tools, and nearing the conclusion of 
the project also on other physical devices. Also before deployment i checked also in
Opera and Safari. The only issue that i have noticed is the scroll down arrow that renders as 
completle not edited squere cube, and on every other divices looks like my concept arrow.
I used responsive mode in the dev tools and resizing the viewport to find unwanted 
behavior  so as to correct it. I also periodically checked the appearance on both my 
phone and tablet (both Android) in Chrome. 
I continually  tested code in the [W3C HTML Validator](https://validator.w3.org/)
in order to get rid of errors. 

Testing my CSS in the [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) revealed few errors that I  identify and fixed. 

Java Script codes were validated using [jshint](https://jshint.com/) reveling 3 errors that were fixed.

Vocabulary and grammar was checked on [Spell chacker](http://www.reverso.net/spell-checker/english-spelling-grammar/)

## Deployment

This project was developed using the AWS Cloud9 IDE, committed to git and pushed to GitHub using the built in function within AWS.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/tomciosegal/NBA_greatest_trio)

I pushed my local git repo of code, images and media to a Github repository, and 
enabled Github Pages for it. There is only one branch, master. URL of Home Page is  [here](https://tomciosegal.github.io/NBA_greatest_trio/) 



### Content
- The text for "about" section copied from the [Dublin Beer Festival](https://www.irishcraftbeerfestival.ie/)
- The text for "why you should care" section copied from the [big grill festival](https://www.biggrillfestival.com/)
- The text for "partnership section copied from the  [brew fest partners](https://brewfestpartners.com/)

### Media
The photos used in this site were obtained from 
-  [Pixabay](https://pixabay.com/) 
-  [Unsplashfoto](https://unsplash.com/)
-  [Pexels](https://www.pexels.com/)

The Videos used in this site were obtained from:
- [Youtube](https://www.youtube.com/)
- [Pixabay](https://pixabay.com/)



### Acknowledgements
I have availed of many resources around the web to help me learn. The following is 
far from a complete list, but it covers those which were most important for me.

- [Stack Overflow](https://stackoverflow.com/users/5656369/john)
- [W3schools](https://www.w3schools.com/)
- [CSS_TRICKS](https://css-tricks.com/)
- [Rachel Andrew's tutorials](https://www.rachelandrew.co.uk/)
- The code-institute-room at [Slack](https://slack.com/intl/en-ie/)
- [Codedrops](https://tympanus.net/codrops/)
- [Awwwards](https://www.awwwards.com/)

I received inspiration for this project from Dublin [beer festival](https://www.irishcraftbeerfestival.ie/).
I wanted to see how would I recommend that festival to already existing website.  

