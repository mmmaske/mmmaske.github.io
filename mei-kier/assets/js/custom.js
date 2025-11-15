const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var request_name = urlParams.get('name');
var guest_id = urlParams.get('ref');
// if (guest_id === null) {
//     document.getElementById("seat_requirement_container").style.display = "none";
//     document.getElementById("rsvp_link").style.display = "none";
//     document.getElementById("location_link").style.display = "none";
//     document.getElementById("entourage_link").style.display = "none";
//     document.getElementById("attire_link").style.display = "none";
//     document.getElementById("giftguide_link").style.display = "none";
//     //toastr["info"]("Please request a custom link from the wedding party to access the rest of the site.","Blank Link ID");
// }
// else {
//     get_spreadsheet_row(guest_id);
// }

function get_spreadsheet_row(id="") {
    var url = 'https://docs.google.com/spreadsheets/d/e/[URL_REDACTED]/pub?output=csv';
    $.ajax({
        url: url,
        success: function (data) {
            var item = data.split("\n");
            $.each(item, function (i, ioo) {
                var row = ioo.split(",");
                if(row[1]==id) {
                    var fullname = row[3]+', '+row[2];
                    var fullname_rev = row[2]+' '+row[3];
                    document.getElementById('name').value = fullname;
                    document.getElementById("name").setAttribute("readonly",true);

                    var seats = row[4];
                    if(seats > 0) {
                        for(i=1; i<=seats; i++){
                            var x = document.getElementById("seat_requirement");
                            var option = document.createElement("option");
                            option.text = option.value = i;
                            x.add(option);
                        }
                        document.getElementById("seat_requirement_container").style.display = "block";
                        document.getElementById("rsvp_link").style.display = "list-item";
                        document.getElementById("location_link").style.display = "list-item";
                        document.getElementById("entourage_link").style.display = "list-item";
                        document.getElementById("attire_link").style.display = "list-item";
                        document.getElementById("giftguide_link").style.display = "list-item";
                        document.getElementById('seat_quantity').innerHTML = seats;
                        document.getElementById('seat_requirement').value = seats;
                        toastr["info"]("The details are ready for you to view. Hope to see you there!","Hi "+fullname_rev+"!");
                    }
                }
            });
        },
        error: function (err) {
            console.log(err.status);
            document.getElementById("rsvp_link").style.display = "none";
            document.getElementById("location_link").style.display = "none";
            document.getElementById("entourage_link").style.display = "none";
            document.getElementById("attire_link").style.display = "none";
            document.getElementById("giftguide_link").style.display = "none";
            toastr["info"]("Please request a custom link from the wedding party to access the rest of the site.","Broken Link");
        }
    });
}

function onSubmit(token) {
    send_rsvp(token);
  }


function send_rsvp(token) {
    document.getElementById("btn_send").style.display = "none";
    var input_name = document.getElementById('name');
    var input_contact = document.getElementById('contactinfo');
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
        "recaptchaResponse":token,
    };

    console.log(dataString);

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
                document.getElementById("contactinfo").setAttribute("disabled",true);
                document.getElementById("message").setAttribute("disabled",true);
                var msg = "";
                if(input_rsvp_selected=="YES") msg = "We hope to see you there!";
                else msg = "Thank you for your response!";
                toastr["success"](msg,"RSVP Sent!");
            }
            else { // fail
                console.log(html);
                document.getElementById("btn_send").style.display = "block";
                toastr["error"]("Please try again.","RSVP not sent!");
            }
        },
        error: function(html) { // connection error
            console.log(html);
            document.getElementById("btn_send").style.display = "block";
            toastr["error"]("Please try again.","RSVP not sent!");
        }
    });
}