var MovieView = {
    renderList: function($element, movie) {
        $element.append("<li><a href='#page-movie-detail'><img src='" + movie.img + "'>" + movie.name + "<p>" + movie.desc + "</p></a></li>");
    }
};


