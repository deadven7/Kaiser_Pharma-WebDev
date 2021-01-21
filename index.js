$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
}); 

$(function () { 
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
    })
});

