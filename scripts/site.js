// Main JS should go here!
// Include scripts using Browserify by doing:

 var $ = require("jquery");

var burger = document.querySelector('.main-nav--icon');
var nav = document.querySelector('.main-nav');

burger.addEventListener('click', function () {
    if(nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
});

// im sure there's a way to not write out the same exact thing twice..... 


window.addEventListener('load', function() {
    console.log("it worksssss");
    if($(window).width() > 700) {
        burger.classList.add('hidden');
        nav.classList.remove('hidden');
    } else if ($(window).width() < 700) {
        burger.classList.remove('hidden');
        nav.classList.add('hidden');
    }
});

window.addEventListener('resize', function() {
    console.log("it worksssss");
    if($(window).width() > 700) {
        burger.classList.add('hidden');
        nav.classList.remove('hidden');
    } else if ($(window).width() < 700) {
        burger.classList.remove('hidden');
        nav.classList.add('hidden');
    }
});

/* Basically you should concatenate all your javascript and place it here. */
// $("html").click(function () {
//     var red = (Math.round(Math.random() * 255));
//     var blue = (Math.round(Math.random() * 255));
//     var green = (Math.round(Math.random() * 255));
//     var a = Math.random();
//     $("html").css("background-color", "rgba(" + red + ", " + blue + ", " + green + ", " + a + ")");
// });