
$(function () {
    skrollr.init({
        forceHeight: false
    });

    $("#sushi-movie").click(function (evt){
        evt.preventDefault();
        showMovie($(evt.currentTarget))
    })
    $("body").keydown(function (evt) {
        if (evt.keyCode === 27) {
            hideMovie();
        }
    });
    $("#movie-player-container").click(function (){
        hideMovie();
    });

    var showMovie = function ($element) {
        var movieUrl = $element.attr("href");
        $("#movie-iframe").attr("src", movieUrl);
        $("#movie-player-wrapper").show();
        var marginTop = ($(window).height() - $("#movie-player").height()) / 2
        $("#movie-player").css({ marginTop: marginTop });
    }

    var hideMovie = function () {
        $("#movie-player-wrapper").hide();
        $("#movie-iframe").attr("src", "");
    };
});