$(function () {
    $("#page-movie-detail").on("pagebeforeshow", function () {
        $("#seatPrice, #custInfo").hide();
    });
    $("ul#list-movies li a").on("click", function () {
        var movie_id = $(this).attr("movie-id");
        MovieController.movieDetailById(movie_id);
    });
    $("#txt_date").on("change", function(){
        MovieController.getTimes();
    });
    $("#cmb_time").on("change", function(){
        MovieController.getCinemas(); 
    });
    $("#txt_date, #cmb_time, #cmb_cinema").on("change", function(){
        var date = $("#txt_date").val();
        var time = $("#cmb_time").val();
        var cinema = $("#cmb_cinema").val();
        if (date && time && cinema){
            $("#seatPrice").show();
        }else{
            $("#seatPrice").hide();
        }
    });
    $("#txt_num_of_seat").on("change", function(){
        var num = $("#txt_num_of_seat").val();
        var price = 4;
        $("#txt_price").val(price * num);
        if (num) {
            $("#custInfo").show();
        }else{
            $("#custInfo").hide();
        }
    });
    $("#btn_book").click(function() {
        var id = $("#txt_id").val();
        MovieController.bookingInfo(id);
    });
});