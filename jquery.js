// show/hide button for scroll on window and resize nav
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 250) {
        $('nav').addClass('prov');
        $('.button-up').addClass('d-block');
    } else {
        $('nav').removeClass('prov');
        $('.button-up').removeClass('d-block');
    }
});
//smooth za scroll buttone
$('.scrll').on("click", function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
//smooth linkovi bez scroll buttona
$('a[href^="#"]:not(.scrll)').on('click', function(event) {
    //smooth scrool na klik nekog linka
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    //za tab i mobile uklanjanje menu liste nakon klika nekog linka
    if (window.innerWidth <= 800) {
        $("#btn").toggleClass("change");
        var a = document.getElementById("lista");
        // var btn = document.getElementsByClassName("menuBtn");
        if (a.style.display === 'block')
            a.style.display = 'none';
        else
            a.style.display = 'block';
    }
});

//focus li buttons on position 0 top
$(window).on("scroll", function() {
    //header
    var pozicija = $(window).scrollTop() - $('#bg').offset().top;
    var visina = $('#bg').height();
    if (pozicija > 0 && pozicija < visina)
        $('#homebtn').addClass('focus');
    else
        $('#homebtn').removeClass('focus');
    //section
    var sekcije = $('section');
    var alink = $('#lista ul a');
    for (var i = 0; i < sekcije.length; i++) {
        var pozicija = $(window).scrollTop() - $(sekcije[i]).offset().top;
        var visina = $(sekcije[i]).height();
        if (pozicija > 0 && pozicija < visina)
            $(alink[i + 1]).addClass('focus');
        else
            $(alink[i + 1]).removeClass('focus');
    }
});

//set css za strelice slide showa na mobitelu
if (window.innerWidth <= 800) {
    var leftIcon = $('#leftIcon').html();
    $('#leftIcon').html("");
    $('#rightIcon').prepend(leftIcon);
    $('#rightIcon').css({
        "width": "50%",
        "text-align": "center"
    });
    $('#rightIcon :first-child').css("left", "50px");
    $('#rightIcon :last-child').css("right", "50px");


}