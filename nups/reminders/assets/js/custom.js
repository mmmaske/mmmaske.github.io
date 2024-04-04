const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var hide_links = false;
var request_name = urlParams.get('name');
var guest_id = urlParams.get('ref');
if (guest_id === null) {
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
                    var fullname_rev = row[2]+' '+row[3];
                    var fullname_cell = row[4];
                    var navlink = "mtcarmel_navlink";
                    console.log(row);
                    document.getElementById('name').innerHTML = fullname_cell;
                    document.getElementById("seats").innerHTML = row[5];
                    document.getElementById("calltime_value").innerHTML = row[10];
                    document.getElementById("calldate").innerHTML = row[11];
                    document.getElementById("call_location").innerHTML = row[12];
                    document.getElementById("call_address").innerHTML = row[13];
                    if(row[14]=='Hotel') { document.getElementById('prep_area').style.display='table-row'; }
                    // if(row[14]=='Hotel') { navlink = 'madison_navlink' }
                    // if(row[14]=='Church') { navlink = 'mtcarmel_navlink' }
                    // if(row[14]=='Reception') { navlink = 'avire_navlink' }
                    // document.getElementById(navlink).style.display = 'inline';



                }
            });
        },
        error: function (err) {
            console.log(err.status);
            // document.getElementById("rsvp_link").style.display = "none";
            // document.getElementById("location_link").style.display = "none";
            // document.getElementById("entourage_link").style.display = "none";
            // document.getElementById("attire_link").style.display = "none";
            // document.getElementById("giftguide_link").style.display = "none";
            // toastr["info"]("Please request a custom link from the wedding party to access the rest of the site.","Broken Link");
        }
    });
}
