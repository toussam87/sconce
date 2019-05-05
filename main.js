//not using es6 for support of older browsers;

var hours = new Date().getHours()
var isDayTime = hours > 6 && hours < 20;
var shades = document.getElementsByClassName('shade');

if(!isDayTime) {
    for (var i = 0; i < shades.length; i++) {
        shades[i].classList.add('night')
    }
} else if (isDayTime && document.getElementsByClassName('night')){
    for (var i = 0; i < shades.length; i++) {
        shades[i].classList.remove('night')
    }
} 
