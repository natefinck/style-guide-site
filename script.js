jQuery(document).ready(function () {
    jQuery('.menuButton').click(function(){
        if ($(".nav").hasClass('navHidden')) {
            $( ".nav" ).removeClass( 'navHidden');
            $(".menuButton").css("transform", "rotate(-540deg)");
        } else {
          $( ".nav" ).addClass( 'navHidden');
          $(".menuButton").css("transform", "rotate(-90deg)");
        }
    });
});