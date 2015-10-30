var MovieModel = {
    movies: [],
    set: function () {
        MovieModel.movies.push({
            "id":"1",
            "name":"I Fine Thank You Love You",
            "img":"img/movies/thanksyou.jpg",
            "desc":"Yim goes to English school to keep his Japanese girlfriend in this Thai romantic comedy.",
            "country":"Thailand",
            "gern":"Comdey",
            "year":"2015",
            "language":"Khmer",
            "duration":"01:00:00",
            "trailer":"https://www.youtube.com/embed/u11gBJ8AGRQ"
        },{
            "id":"2",
            "name":"Twenty",
            "img":"img/movies/twenty.jpg",
            "desc":"A story about three friends, Chiho, Dongwoo, and Gyungjae.",
            "country":"Korea",
            "gern":"Mystery",
            "year":"2015",
            "language":"Khmer",
            "duration":"01:30:00",
            "trailer":"https://www.youtube.com/embed/U18VIwJMsrs"
        },{
            "id":"3",
            "name":"Fantastic 4",
            "img":"img/movies/fantastic4.jpg",
            "desc":"Four young outsiders teleport to an alternate and dangerous universe.",
            "country":"",
            "gern":"",
            "year":"2015",
            "language":"English",
            "duration":"01:20:00",
            "trailer":"https://www.youtube.com/embed/DMEa0CJbAUs"
        });
    },
    get: function () {
        return MovieModel.movies;
    }
};


