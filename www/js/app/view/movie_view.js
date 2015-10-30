var MovieView = {
    renderList: function ($element, movie) {
        $element.append("<li><a movie-id='" + movie.id + "' href='#page-movie-detail'><img src='" + movie.img + "'>" + movie.name + "<p>" + movie.desc + "</p></a></li>");
    },
    renderMovieDetail: function (movie) {
        $("#movie-name").append(movie.name);
        $("#img-detail").append('<img src="' + movie.img + '" width="50%"/>');
        $("#movie-detail").append('<div data-role="collapsible" data-content-theme="a" data-theme="a">\n\
                                    <h4>Movie Detail</h4>\n\
                                    <input type="hidden" name="txt_id" id="txt_id" value="'+movie.id+'">\n\
                                    <table class="ui-responsive" data-role="table" data-mode="reflow">\n\
                                        <thead>\n\
                                            <tr>\n\
                                                <th style="width: 30%;">Title</th>\n\
                                                <th data-priority="1">Country</th>\n\
                                                <th data-priority="2">Genre</th>\n\
                                                <th data-priority="3">Duration</th>\n\
                                                <th data-priority="4">Year</th>\n\
                                                <th data-priority="4">Language</th>\n\
                                            </tr>\n\
                                        </thead>\n\
                                        <tbody>\n\
                                            <tr>\n\
                                                <td>' + movie.name + '</td>\n\
                                                <td>' + movie.country + '</td>\n\
                                                <td>' + movie.gern + '</td>\n\
                                                <td>' + movie.duration + '</td>\n\
                                                <td>' + movie.year + '</td>\n\
                                                <td>' + movie.language + '</td>\n\
                                            </tr>\n\
                                        </tbody>\n\
                                    </table>\n\
                                </div>');
        $("#video-trailer").append('<iframe width="100%" height="100%" src="' + movie.trailer + '" frameborder="0" allowfullscreen></iframe>');
    },
    renderTimes: function ($cmb,movieT) {        
        $cmb.append($('<option>', {value: movieT.time, text: movieT.time}));        
    },
    renderCinemas: function ($cmb,movieT) {        
        $cmb.append($('<option>', {value: movieT.cinema, text: movieT.cinema}));        
    },
    bookingInfo: function ($element,movie) {
        var name = $("#txt_name").val();
        var num = $("#txt_num_of_seat").val();
        var datetime = $("#txt_date").val() + " " + $("#cmb_time").val();
        var cinema = $("#cmb_cinema").val();
        var price = $("#txt_price").val();
        var alertString = "Dear <b>" + name + "</b>,<br> You are sucessful in booking Ticket as following info:\n\
                           <ul><li><b>Title:</b>"+ movie.name +"</li><li><b>Num of seat:</b> " + num + "</li>\n\
                               <li><b>DateTIme</b>: " + datetime + "</li><li><b>Cinema:</b> " + cinema + "</li>\n\
                               <li><b>Total Price:</b> " + price + " $</li></ul>";
        $element.html(alertString);
    }
};


 