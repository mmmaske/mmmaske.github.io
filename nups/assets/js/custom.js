const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var request_name = urlParams.get('name');
var guest_id = urlParams.get('ref');
if (guest_id === null) {
    document.getElementById("seat_requirement_container").style.display = "none";
}
else {
    get_spreadsheet_row(guest_id);
}

function get_spreadsheet_row(id="") {
    var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRixYeF5576H0dbO2ktwn7uA0mQ5ZCS7Z7cevJW_aKzA82lRU7mjtbj--K_URvoHwydeAHmQpR0lzax/pub?output=csv';
    $.ajax({
        url: url,
        success: function (data) {
            var item = data.split("\n");
            $.each(item, function (i, ioo) {
                var row = ioo.split(",");
                if(row[1]==id) {
                    var fullname = row[3]+', '+row[2];
                    document.getElementById('name').value = fullname;
                    document.getElementById("name").setAttribute("readonly",true);

                    var seats = row[4];
                    if(seats > 0) {
                        for(i=1; i<=seats; i++){
                            var x = document.getElementById("seat_requirement");
                            var option = document.createElement("option");
                            option.text = i;
                            x.add(option);
                        }
                        document.getElementById("seat_requirement_container").style.display = "block";
                        document.getElementById('seat_quantity').innerHTML = seats;
                    }
                }
            });
        },
        error: function (err) {
            console.log(err.status);
        }
    });
}

function send_rsvp() {
    document.getElementById("btn_send").style.display = "none";
    var input_name = document.getElementById('name');
    var input_contact = document.getElementById('contact');
    var input_rsvp = document.getElementById('response');
    var input_rsvp_selected = input_rsvp.options[input_rsvp.selectedIndex].value;
    var input_seatr = document.getElementById('response');
    var input_seatr_selected = input_seatr.options[input_seatr.selectedIndex].value;
    var input_message = document.getElementById('message');

    var dataString = {
        "full_name":input_name.value,
        "rsvp_reply":input_rsvp_selected,
        "contact":input_contact.value,
        "seat_requirement":input_seatr_selected,
        "message":input_message.value,
    };

    $.ajax({
        type: "GET",
        url: "http://mmmaske.com/index.php/Home/rsvp/",
        data: dataString,
        dataType: 'json',
        crossDomain: true,
        contentType: 'application/x-www-form-urlencoded',
        cache: false,
        success: function(html) {
            if(html.response) { // success
                document.getElementById("name").setAttribute("disabled",true);
                document.getElementById("response").setAttribute("disabled",true);
                document.getElementById("seat_requirement").setAttribute("disabled",true);
                document.getElementById("contact").setAttribute("disabled",true);
                document.getElementById("message").setAttribute("disabled",true);
                var msg = "";
                if(input_rsvp_selected=="YES") msg = "We hope to see you there!";
                else msg = "Thank you for your response!";
                toastr["success"](msg,"RSVP Sent!");
            }
            else { // fail
                document.getElementById("btn_send").style.display = "block";
                toastr["error"]("Please try again.","RSVP not sent!");
            }
        },
        error: function(html) { // connection error
            document.getElementById("btn_send").style.display = "block";
            toastr["error"]("Please try again.","RSVP not sent!");
        }
    });
}