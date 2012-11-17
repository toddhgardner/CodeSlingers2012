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
        next: 'menu-right',
        prev: 'menu-left',
        generateNextPrev: false,
        animationComplete: function (current) {
            window.location.hash = '#' + current;
        }
    });

    $('.menu-left').on('click', function () {
        var current = parseInt($('.menu-links .active').attr('data-page'), 10);
        var newpage = current - 1;
        newpage = newpage < 1 ? 7 : newpage;

        $('.menu-links .link').removeClass('active');
        $('.menu-links').find('[data-page=' + newpage + ']').addClass('active');
    });

    $('.menu-right').on('click', function () {
        var current = parseInt($('.menu-links .active').attr('data-page'), 10);
        var newpage = current + 1;
        newpage = newpage > 7 ? 1 : newpage;

        $('.menu-links .link').removeClass('active');
        $('.menu-links').find('[data-page=' + newpage + ']').addClass('active');
    });

    $('.menu-links .link').on('click', function () {
        $('.menu-links .link').removeClass('active');
        $(this).addClass('active');
    });
});
