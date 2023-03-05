$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.main-nav').addClass('mmmm');
    } else {
        $('.main-nav').removeClass('mmmm');
    }
});

// Back to top button
var btn = $('#backToTop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


// PROJECTS PORTFOLIO
$('#Container').mixItUp();
// END PROJECTS PORTFOLIO
