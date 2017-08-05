"use strict";

var MainNamespace = {

};

jQuery(document).ready(function() {
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    window.onbeforeunload = function() {
        $('body').css({'overflow':'hidden'});
        $('#preloader').fadeIn();
        $('#status').fadeIn();
    };
});
