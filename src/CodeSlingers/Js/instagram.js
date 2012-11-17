window.renderInstagram = function (response) {

    var imgTempl = _.template('<a href="<%= link %>" target="_blank"><img src="<%= thumbnail %>"/>');
    var $photos = $('#photos');

    _.each(response.data, function (thing) {

        if (thing && thing.link && thing.images && thing.images.thumbnail && thing.images.thumbnail.url) {

            $photos.append(imgTempl({
                link: thing.link,
                thumbnail: thing.images.thumbnail.url
            }));

        }
    });
};

