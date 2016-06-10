'use strict';
var header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function(){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200;
    
    if (distanceY > shrinkOn) {
        header.classList.add('collapsed');
    } else {
        if (header.contains('collapsed')) {
            header.classList.remove('collapsed');
        }
    }

});