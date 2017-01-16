// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");

var navItem = document.querySelector('.nav__item');

navItem.addEventListener('click', function(e) {
    console.log('Ayee');
    if(e.target) {
        navItem.style.backgroundColor = '#85FFF0';
    }
});