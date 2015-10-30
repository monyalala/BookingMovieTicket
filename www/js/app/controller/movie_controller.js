var MovieController = {
    get: function () {
        var movies = MovieModel.get();
        var $element = $("#list-movies");
        $element.html = "";
        $.map(movies, function (movie){
            MovieView.renderList($element, movie);
        });
    },
    movieDetailById: function (id) {
        var movies = MovieModel.get();
        $.map(movies, function (movie){
            if (movie.id === id){
                MovieView.renderMovieDetail(movie);
            }
        });
    },
    getTimes: function () {
        var movieTickets = MovieTicketModel.get();
        var date = $("#txt_date").val();
        var $cmb = $("#cmb_time");
        $cmb.empty(); //remove all child nodes
        $cmb.append($('<option>', {value: '', text: "Please select Time:"}));
        $.map(movieTickets, function (movieT){
            if (date === movieT.date) {
                MovieView.renderTimes($cmb,movieT); 
            }
        });
        $cmb.selectmenu("refresh");
    },
    getCinemas: function () {
        var movieTickets = MovieTicketModel.get();
        var time = $("#cmb_time").val();
        var $cmb = $("#cmb_cinema");
        $cmb.empty(); //remove all child nodes
        $cmb.append($('<option>', {value: '', text: "Please select Cinema:"}));
        $.map(movieTickets, function (movieT){
            if (time === movieT.time) {
                MovieView.renderCinemas($cmb,movieT); 
            }
        });
        $cmb.selectmenu("refresh");
    },
    bookingInfo: function (id) {
        var movies = MovieModel.get();
        var $element = $("#dlg-booking-info");
        $.map(movies, function (movie){
            if (movie.id === id){
                MovieView.bookingInfo($element,movie);
            }
        });
    }
};

 
