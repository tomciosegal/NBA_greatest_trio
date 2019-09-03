$(document).ready(function () {

    // ------------------------------------- NAVBAR ------------------------------------

    // Hide all sections apart from the main one.

    $(function () {
        $(".dashboard-container").hide();
    });

    // Upon clicking upon the landing page button, should show the stats

    $(function () {
        $(".stat-button").on("click", function () {
            $(".loading-page").hide();
            $(".dashboard-container").fadeIn(1000);
        });
    }); 

   // Upon clicking upon the home button, should take to landing page

    $(function () {
        $("#navHome").on("click", function () {
            $(".dashboard-container").hide();
            $(".loading-page").fadeIn(300);
        });
    }); 
    $("#main-btn").mouseenter(function(){
  $(this).css ("background-color", "#E47041");
});
$("#main-btn").mouseleave(function(){
  $(this).css ("background-color", "");
});
$('footer').load('.loading-page', function() {
      $(this).hide();})
      
      $('#main-btn').click(function(){
       $('footer').show();   
      
    });
    



});

function myFunction() {
  var mj
  var MJ_facts = document.getElementById("MJ-facts");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("mjBtn");

  if (MJ_facts.style.display === "none") {
    MJ_facts.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    MJ_facts.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var kb
  var KB_facts = document.getElementById("KB-facts");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("kbBtn");

  if (KB_facts.style.display === "none") {
    KB_facts.style.display = "inline";
    btnText1.innerHTML = "Read more"; 
    moreText1.style.display = "none";
  } else {
    KB_facts.style.display = "none";
    btnText1.innerHTML = "Read less"; 
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var lj
  var LJ_facts = document.getElementById("LJ-facts");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("ljBtn");

  if (LJ_facts.style.display === "none") {
    LJ_facts.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    LJ_facts.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
  }
}






// set up text to print, each item in array is new line
var aText = new Array(

"“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times",
"I’ve been trusted to take the game winning shot and missed.I’ve failed over and over",
"and over again in my life. And that is why I succeed.“",

);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 




function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementsByClassName("MJ-quote");
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 document.getElementsByClassName("MJ-quote").innerHTML = "Lorem ipsum dolor sit amet, consect";
 /*if ( iTextPos++ == iArrLength ) {
  console.log('>>>>>', iTextPos)
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(typewriter(), 500);
  }
 } else {
  setTimeout(typewriter(), iSpeed);
 }*/
}


typewriter();