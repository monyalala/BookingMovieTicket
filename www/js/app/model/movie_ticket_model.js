var MovieTicketModel = {
    movietickets: [],
    set: function () {
        MovieTicketModel.movietickets.push({
            "id":"1",
            "date":"2015-10-30",
            "time":"10:00 AM",
            "cinema":"Legend"
        },{
            "id":"2",
            "date":"2015-10-30",
            "time":"11:00 AM",
            "cinema":"Major Cineplex"
        },{
            "id":"3",
            "date":"2015-10-30",
            "time":"03:00 AM",
            "cinema":"Legend"
        },{
            "id":"4",
            "date":"2015-10-31",
            "time":"05:00 PM",
            "cinema":"Legend"
        },{
            "id":"5",
            "date":"2015-10-31",
            "time":"08:00 PM",
            "cinema":"Major Cineplex"
        });
    },
    get: function () {
        return MovieTicketModel.movietickets;
    }
};


