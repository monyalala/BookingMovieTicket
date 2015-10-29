var MovieModel = {
    movies: [],
    setMovies: function () {
        MovieModel.movies.push({
            "id":"1",
            "name":"I Fine Thank You Love You",
            "img":"img/movies/thanksyou.jpg",
            "desc":"Yim goes to English school to keep his Japanese girlfriend in this Thai romantic comedy."
        },{
            "id":"2",
            "name":"Twenty",
            "img":"img/movies/twenty.jpg",
            "desc":"A story about three friends, Chiho, Dongwoo, and Gyungjae."
        },{
            "id":"3",
            "name":"Fantastic 4",
            "img":"img/movies/fantastic4.jpg",
            "desc":"Four young outsiders teleport to an alternate and dangerous universe."
        });
    },
    getMovies: function () {
        return MovieModel.movies;
    }
};


