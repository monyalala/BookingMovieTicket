var MovieController = {
    get: function () {
        var movies = MovieModel.getMovies();
        var $element = $("#list-movies");
        $element.html = "";
        $.map(movies, function (movie){
            MovieView.renderList($element, movie);
        });
    }
};


