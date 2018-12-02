// $(document).ready(function(){
//     $("#list_id").click(function(){
//         $(this).hide();
//     });
// });
var a,b; 
var id;
 
function getId(el) {
    
    
    a=$(el).text();
    alert(a);
    
    window.location = a;

}
function getPrice(el) {
    b=$(el).text();
    alert(b);
    window.location = b;

}


var flight_carrier;


$(document).ready(function() {
 
    $("#api").submit(function(e) {
        e.preventDefault();
        id=$("#val5").val();
        alert(id);
		var flight_carrier = {
			"flight_carrier_desc":$("#val1").val(),
			"flight_carrier_logo":$("#val2").val(),
			"flight_carrier_name":$("#val3").val(),
			"flight_carrier_website":$("#val4").val(),
      }

        console.log(JSON.stringify(flight_carrier));
        $.ajax({
            url: "http://159.65.148.158/api/v1/flight/carrier/"+id,
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(flight_carrier),
            success: function(result) {
                console.log(result);
            },
            error: function(response) {
                console.log(response);
            }
        });
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "http://159.65.148.158/api/v1/flight", true);
        // xhr.onload = function () {
        //     console.log(xhr.responseText);
        // };
        // xhr.send();
        // var xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
        // xhr.open("POST", chrome.extension.getURL('http://159.65.148.158/api/v1/flight'), true);
        // xhr.send();
        var myHeaders = new Headers();
        myHeaders.append("X-My-Custom-Header", "some value");
        fetch("http://159.65.148.158/api/v1/flight", {
            headers: myHeaders
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
        });
    });
});