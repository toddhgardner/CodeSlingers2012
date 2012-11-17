$(document).ready(function () {
    var startSlide = 1;
    if (window.location.hash) {
        startSlide = window.location.hash.replace('#', '');
        $('.menu-links').find('[href=' + window.location.hash + ']').addClass('active');
    } else {
        $('.menu-links .link').first().addClass('active');
    }


    $("#menu").slides({
        preload:true,
        start: startSlide,
        container: 'menu-items',
        pause: 5000,
        next: 'menu-right',
        prev: 'menu-left',
        generateNextPrev: false,
        animationComplete: function (current) {
            window.location.hash = '#' + current;
        }
    });

    $('.menu-links .link').on('click', function () {
        $('.menu-links .link').removeClass('active');
        $(this).addClass('active');
    });
});
