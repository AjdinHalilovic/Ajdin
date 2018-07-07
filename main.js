//show/hide menu bar on mobile
function MenuBtn(x) {
    x.classList.toggle("change");
    var a = document.getElementById("lista");
    if (a.style.display === 'block') {
        a.style.display = 'none';

    } else {
        a.style.display = 'block';
    }
}
//slide show kolega automatic
var index = 0;
var slides = document.getElementsByClassName('slide');
var timer;
slideShow();

function slideShow() {
    if (timer != null)
        clearTimeout(timer);
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) { index = 1 }
    slides[index - 1].style.display = "block";
    timer = setTimeout(slideShow, 3000); // timer svako 3 sekunde
}
// slide na klik
function Next(a) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index += a; // + ili - slide
    if (index > slides.length) { index = 1 } else if (index < 1) { index = 3 }
    slides[index - 1].style.display = "block";
    if (timer != null)
        clearTimeout(timer);
    timer = setTimeout(slideShow, 3000); //vracanje nazad na automatski slide show
}

// lazy load header picture 5 mb
window.onload = function() {
    $('header').css("background-image", "url(headerbg3.jpg)");
};