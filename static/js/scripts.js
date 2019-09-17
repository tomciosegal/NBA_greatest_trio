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
    
    
    
    // Back to top button

/**
 * Function implements smooth scrolling back to top after clicking the button
 */
    let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(d) {
  d.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

   // Upon clicking upon the home button, should take to landing page

    $(function () {
        $("#navHome").on("click", function () {
            $(".dashboard-container").hide();
            $(".loading-page").fadeIn(300);
            $("footer").hide();
        });
    }); 
    $("#main-btn").mouseenter(function(){
  $(this).css ("background-color", "#E47041");
});
$("#main-btn").mouseleave(function(){
  $(this).css ("background-color", "");
});
$('footer').load('.loading-page', function() {
      $(this).hide();});
      
      $('#main-btn').click(function(){
       $('footer').show();
    });
    

/**
 * Function read more button
 */

});

function myFunction() {
  var mj;
  var MJ_facts = document.getElementById("MJ-facts");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("mjBtn");

  if (MJ_facts.style.display === "none") {
    MJ_facts.style.display = "inline";
    btnText.innerHTML = "More facts"; 
    moreText.style.display = "none";
  } else {
    MJ_facts.style.display = "none";
    btnText.innerHTML = "Less Facts"; 
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var kb;
  var KB_facts = document.getElementById("KB-facts");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("kbBtn");

  if (KB_facts.style.display === "none") {
    KB_facts.style.display = "inline";
    btnText1.innerHTML = "More facts"; 
    moreText1.style.display = "none";
  } else {
    KB_facts.style.display = "none";
    btnText1.innerHTML = "Less Facts"; 
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var lj;
  var LJ_facts = document.getElementById("LJ-facts");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("ljBtn");

  if (LJ_facts.style.display === "none") {
    LJ_facts.style.display = "inline";
    btnText2.innerHTML = "More facts"; 
    moreText2.style.display = "none";
  } else {
    LJ_facts.style.display = "none";
    btnText2.innerHTML = "Less Facts"; 
    moreText2.style.display = "inline";
  }
}



/**
 * Function see comments button
 */

function commentsFunction(){
  
  var see_comments = document.getElementById("see-comments");
  var moreComment = document.getElementById("comments");
  var btnComment = document.getElementById("points-comments");

  if (see_comments.style.display === "none") {
   see_comments.style.display = "inline";
    btnComment.innerHTML = "See comments"; 
    moreComment.style.display = "none";
  } else {
    see_comments.style.display = "none";
    btnComment.innerHTML = "Hide comment"; 
    moreComment.style.display = "inline";
  }
}

function commentsFunction1(){
  
  var see_comments1 = document.getElementById("see-comments1");
  var moreComment1 = document.getElementById("comments1");
  var btnComment1 = document.getElementById("points-comments1");

  if (see_comments1.style.display === "none") {
   see_comments1.style.display = "inline";
    btnComment1.innerHTML = "See comments"; 
    moreComment1.style.display = "none";
  } else {
    see_comments1.style.display = "none";
    btnComment1.innerHTML = "Hide comment"; 
    moreComment1.style.display = "inline";
  }
}

function commentsFunction2(){
  
  var see_comments2 = document.getElementById("see-comments2");
  var moreComment2 = document.getElementById("comments2");
  var btnComment2 = document.getElementById("points-comments2");

  if (see_comments2.style.display === "none") {
   see_comments2.style.display = "inline";
    btnComment2.innerHTML = "See comments"; 
    moreComment2.style.display = "none";
  } else {
    see_comments2.style.display = "none";
    btnComment2.innerHTML = "Hide comment"; 
    moreComment2.style.display = "inline";
  }
}

function commentsFunction3(){
  
  var see_comments3 = document.getElementById("see-comments3");
  var moreComment3 = document.getElementById("comments3");
  var btnComment3 = document.getElementById("points-comments3");

  if (see_comments3.style.display === "none") {
   see_comments3.style.display = "inline";
    btnComment3.innerHTML = "See comments"; 
    moreComment3.style.display = "none";
  } else {
    see_comments3.style.display = "none";
    btnComment3.innerHTML = "Hide comment"; 
    moreComment3.style.display = "inline";
  }
}

/**
 * Function see summary button
 */
 function summaryFunction(){
  
  var see_summary = document.getElementById("see-summary");
  var moreSummary = document.getElementById("summary");
  var btnSummary = document.getElementById("summary-comments");

  if (see_summary.style.display === "none") {
   see_summary.style.display = "inline";
    btnSummary.innerHTML = "See summary"; 
    moreSummary.style.display = "none";
  } else {
    see_summary.style.display = "none";
    btnSummary.innerHTML = "Hide summary"; 
    moreSummary.style.display = "inline";
  }
}
 







