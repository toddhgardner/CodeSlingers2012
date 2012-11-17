$(document).ready(function () {
    var startSlide = 1;
    if (window.location.hash) {
        startSlide = window.location.hash.replace('#', '');
    }

    $("#menu").slides({
        preload:true,
        start: startSlide,
        container: 'menu-items',
        pause: 5000,
        //currentClass: 'active',
        //pagination: 'menu-links',
        next: 'menu-right',
        prev: 'menu-left',
        generateNextPrev: false,
        //generatePagination: false,
        animationComplete: function (current) {
            // Set the slide number as a hash
            window.location.hash = '#' + current;
        }
    });
});
