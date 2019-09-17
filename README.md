# NBA Greatest Trio Interactive Data Dashboard

### Stream Two Project: Interactive Frontend Development - Code Institute

Website features a seven charts plus three players portfolio on top of the page where you can
get famialiar with the NBA heroes that developer wanted to present.
Firstly when you will see loading page
where css typewriter kicks off and you will see one the most famous Micheal Jordan quotes.
The See stats button will take u down to actual charts, where all the fun begins.
[Wireframes] (https://github.com/tomciosegal/NBA_greatest_trio/tree/master/wireframes)for the dashboard can be found in the assets folder of the repository.
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

The backgroung for large screens was uploaded from [Pixabay] (https://pixabay.com/) and makes feel you really want to play basketball.

##### Portfolio
The Portfolio section features all three players that are given different backgrounds, so later they will be identify with these colors.

 The Portfolio section also includes some brief info 
 about every player like:
- Date of birth
- Titles
- Team played
- Total games played

This section is sort of introduction to the viewers, so they have a picture who's stats are compared on this site.

##### Charts

Strait  after that an actaul charts with stats will show along with a scroll up arrow which will come up
while reaching to 
there apart from a wide selection of beers.
When u scroll  further down you will see who will be hosting the venue this year. When you click
on the logo you will be directed to a new window with and actual beer producer. 
This section is visible for large screen users only.

Enough information to satisfy curiosity without overwhelming the user.


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
    

