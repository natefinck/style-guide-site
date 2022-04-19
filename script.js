jQuery(document).ready(function () {
    jQuery('.menuButton').click(function(){
        console.log("clicked!");
        if ($(".nav").hasClass('navHidden')) {
            $( ".nav" ).removeClass( 'navHidden');
            $(".menuButton").css("transform", "rotate(-630deg)");
        } else {
          $( ".nav" ).addClass( 'navHidden');
          $(".menuButton").css("transform", "rotate(0deg)");
        }
    });
});