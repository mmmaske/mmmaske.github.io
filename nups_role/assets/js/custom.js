const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var guest_id = urlParams.get('ref');
document.getElementById("header_text").style.display = "none";
if (guest_id === null) {
    window.location = 'http://mmmaske.com/nups';
}
else {
    get_spreadsheet_row(guest_id);
}
function get_spreadsheet_row(id="") {
    var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSb1tPUVLobj1Uqc7lt3F7kyh4_uy3zcBpq6uyz1Gy9QrUm8Z7UjFdiw5jHarCKJqkw4uihayHEJM5J/pub?output=csv';
    $.ajax({
        url: url,
        success: function (data) {
            var item = data.split("\n");
            $.each(item, function (i, ioo) {
                var row = ioo.split(",");
                if(row[2]==id) {
                    document.getElementById("header_text").style.display = "block";
                    var fullname = row[4];
                    console.log(fullname);
                    document.getElementById('recipient0').innerHTML = fullname;
                    document.getElementById('recipient').value = fullname;

                    var role = row[5];
                    document.getElementById('role').value = role;
                    document.getElementById('role0').innerHTML = role;
                    document.getElementById('role1').innerHTML = role;
                }
            });
        },
        error: function (err) {
            console.log(err.status);
        }
    });
}


function send_rolesvp() {
    document.getElementById("btn_send").style.display = "none";
    var input_name = document.getElementById('recipient');
    var input_role = document.getElementById('role');
    var input_contact = document.getElementById('contact');
    var input_rsvp = document.getElementById('answer');
    var input_rsvp_selected = input_rsvp.options[input_rsvp.selectedIndex].value;
    var input_message = document.getElementById('message');

    var dataString = {
        "full_name":input_name.value,
        "rolesvp_reply":input_rsvp_selected,
        "role":input_role.value,
        "contact":input_contact.value,
        "message":input_message.value,
    };

    $.ajax({
        type: "GET",
        url: "http://mmmaske.com/index.php/Home/rolesvp/",
        data: dataString,
        dataType: 'json',
        crossDomain: true,
        contentType: 'application/x-www-form-urlencoded',
        cache: false,
        success: function(html) {
            if(html.response) { // success
                document.getElementById("recipient").setAttribute("disabled",true);
                document.getElementById("answer").setAttribute("disabled",true);
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