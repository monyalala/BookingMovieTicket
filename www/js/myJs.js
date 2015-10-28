/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    var datetime = '{ "datetime" : [' +
            '{ "date":"2015-10-30" , "time":"10:00 AM" },' +
            '{ "date":"2015-10-30" , "time":"11:00 AM" },' +
            '{ "date":"2015-10-30" , "time":"06:00 PM" },' +
            '{ "date":"2015-10-29" , "time":"05:00 PM" },' +
            '{ "date":"2015-10-28" , "time":"04:00 PM" },' +
            '{ "date":"2015-10-28" , "time":"2:00 PM" } ],\n\
                "timecinema" : [' +
            '{ "cinema":"Legend" , "time":"10:00 AM" },' +
            '{ "cinema":"Major Cineplex" , "time":"11:00 AM" },' +
            '{ "cinema":"Major Cineplex" , "time":"06:00 PM" },' +
            '{ "cinema":"Major Cineplex" , "time":"05:00 PM" },' +
            '{ "cinema":"Lygend" , "time":"04:00 PM" },' +
            '{ "cinema":"Major Cineplex" , "time":"10:00 AM" },' +
            '{ "cinema":"Major Cineplex" , "time":"2:00 PM" } ]}';
    var obj = JSON.parse(datetime);

    $("#txt_date").change(function() {
        //clear cmb_time
        $('#cmb_time').empty(); //remove all child nodes
        $('#cmb_time').append($('<option>', {value: '', text: "Please select Time:"}));
        $("#cmb_time").selectmenu("refresh");
        var date = $("#txt_date").val();
        for (i = 0; i < obj.datetime.length; i++) {
            if (date == obj.datetime[i].date) {
                $('#cmb_time').append($('<option>', {value: obj.datetime[i].time, text: obj.datetime[i].time}));
                $("#cmb_time").selectmenu("refresh");
            }
        }
        show_SeatPrice();
    });
    $("#cmb_time").change(function() {
        //clear cmb_time
        $('#cmb_cinema').empty(); //remove all child nodes
        $('#cmb_cinema').append($('<option>', {value: '', text: "Please select Cinema:"}));
        $("#cmb_cinema").selectmenu("refresh");
        var time = $("#cmb_time").val();
        for (i = 0; i < obj.timecinema.length; i++) {
            if (time == obj.timecinema[i].time) {
                $('#cmb_cinema').append($('<option>', {value: obj.timecinema[i].cinema, text: obj.timecinema[i].cinema}));
                $("#cmb_cinema").selectmenu("refresh");
            }
        }
        show_SeatPrice();
    });
    $("#cmb_cinema").change(function() {
        show_SeatPrice();
    });
    $("#txt_num_of_seat").change(function() {
        var price = 4;
        var num_seat = $("#txt_num_of_seat").val();
        $("#txt_price").val(price * num_seat);
        show_custinfo();
    });
    $("#btn_book").click(function() {
        var name = $("#txt_name").val();
        var num = $("#txt_num_of_seat").val();
        var datetime = $("#txt_date").val() + " " + $("#cmb_time").val();
        var cinema = $("#cmb_cinema").val();
        var price = $("#txt_price").val();
        var alertString = "Dear <b>" + name + "</b>,<br> You are sucessful in booking Ticket as following info:\n\
                           <ul><li><b>Title:</b> I Fine Thanks You Love You</li><li><b>Num of seat:</b> " + num + "</li>\n\
                               <li><b>DateTIme</b>: " + datetime + "</li><li><b>Cinema:</b> " + cinema + "</li>\n\
                               <li><b>Total Price:</b> " + price + " $</li></ul>";
        $("#dlg-1-content").html(alertString);
    });
    function show_SeatPrice() {
        var date = $("#txt_date").val();
        var time = $("#cmb_time").val();
        var cinema = $("#cmb_cinema").val();
        if (date != "" && time != "" && cinema != "") {
            $("#seatPrice").show();
        } else {
            $("#seatPrice").hide();
        }
    }
    function show_custinfo() {
        var date = $("#txt_date").val();
        var time = $("#cmb_time").val();
        var cinema = $("#cmb_cinema").val();
        var num = $("#txt_num_of_seat").val();
        var price = $("#txt_price").val();
        if (date != "" && time != "" && cinema != "" & num != "" && price != "") {
            $("#seatPrice").show();
            $("#custInfo").show();

        } else {
            $("#seatPrice").hide();
            $("#custInfo").hide();
        }
    }
});


 