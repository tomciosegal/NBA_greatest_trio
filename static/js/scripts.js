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
            $(".dashboard-container").fadeIn(300);
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
})

})