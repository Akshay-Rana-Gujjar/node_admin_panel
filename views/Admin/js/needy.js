
var jobs = new Array();
var jobsinner = new Array();
var img = new Array();
var stop = new Array();
var flights;
var id;
var a;
var b;
var amenities;
var flight_carrier;
var n = 0;
var addweb;

$(document).ready(function() {

    $("#addstop").click(function() {
        alert("You can add multiple stops one by one.");
        var sto = new Object();
        sto.flight_deal = $("#flight_deal").val();
        sto.id = $("#stop_id").val();
        sto.stop_landing_airport = $("#stop_landing_airport").val();
        sto.stop_landing_date = $("#stop_landing_date").val();
        sto.stop_no = $("#stop_no").val();
        sto.stop_place = $("#stop_place").val();
        stop.push(sto);
        $("#flight_deal").val("");
        $("#stop_id").val("");
        $("#stop_landing_airport").val("");
        $("#stop_landing_date").val("");
        $("#stop_no").val("");
        $("#stop_place").val("");
        $("#table-jobs").show();
        n++;
        var table = document.getElementById("jobs_submitted");
        var row = table.insertRow(n - 1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        cell0.innerHTML = stop[n - 1]['flight_deal'];
        cell1.innerHTML = stop[n - 1]['id'];
        cell2.innerHTML = stop[n - 1]['stop_landing_airport'];
        cell3.innerHTML = stop[n - 1]['stop_landing_date'];
        cell4.innerHTML = stop[n - 1]['stop_no'];
        cell5.innerHTML = stop[n - 1]['stop_place'];
    });
    $("#addwebsite").click(function() {
        alert("You can add only one website. If you insert second time it will overwrite the first one.");
        addweb = {
			"id":$("#website_id").val(),
            "logo_image": $("#logo_image").val(),
            "website_name": $("#website_name").val(),
            "website_url": $("#website_url").val()
        }
        $("#website_id").val("");
        $("#logo_image").val("");
        $("#website_name").val("");
        $("#website_url").val("");
    });
    $("#form-jobdetail").submit(function(e) {
        e.preventDefault();
        var job_obj = new Object();
        job_obj.adults = $("#adults").val();
        job_obj.cancellation_charges = $("#cancellation_charges").val();
        job_obj.cancellation_charges = $("#cancellation_charges").val();
        job_obj.children = $("#children").val();
        job_obj.depart_airport = $("#depart_airport").val();
        job_obj.depart_date = $("#depart_date").val();
        job_obj.depart_from_city = $("#depart_from_city").val();
        job_obj.featured_deal = $("#featured_deal").val();
        job_obj.flight = $("#flight").val();
        job_obj.flight_deal_url = $("#flight_deal_url").val();
        job_obj.id = $("#deal_id").val();
        job_obj.international = $("#international").val();
        job_obj.is_partner = $("#is_partner").val();
        job_obj.journey_duration = $("#journey_duration").val();
        job_obj.land_to_city = $("#land_to_city").val();
        job_obj.landing_airport = $("#landing_airport").val();
        job_obj.no_of_stops = $("#no_of_stops").val();
        job_obj.return_date = $("#return_date").val();
        job_obj.stops = stop;
        job_obj.total_fare = $("#total_fare").val();
        job_obj.trip_type = $("#trip_type").val();
        // job_obj.website = {
		// 	"id":$("#website_id").val(),
        //     "logo_image": $("#logo_image").val(),
        //     "website_name": $("#website_name").val(),
        //     "website_url": $("#website_url").val()
        // }
        job_obj.website = addweb;
        jobs.push(job_obj);
        $(this).trigger("reset");
        stop = [];
    });
	$("#images_form").submit(function(e) {
        e.preventDefault();
        var img_obj = new Object();
        img_obj.flight_image = $("#flight_image").val();
        img_obj.flight_image_id = $("#flight_image_id").val();
        img_obj.image_type = $("#image_type").val();
        img_obj.image_url = $("#image_url").val();
        img.push(img_obj);
        $(images_form).trigger("reset");
        $("#table-images").show();
        n++;
        var table = document.getElementById("flight_images");
        var row = table.insertRow(n - 1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = img[n - 1]['flight_image'];
        cell1.innerHTML = img[n - 1]['flight_image_id'];
        cell2.innerHTML = img[n - 1]['image_type'];
        cell3.innerHTML = img[n - 1]['image_url'];
	});
	$("#amenities_form").submit(function(e) {
        e.preventDefault();
        amenities = {
			"Exclusive_check_in_facility":$("#Exclusive_check_in_facility").val(),
			"Spacious_cabins":$("#Spacious_cabins").val(),
			"baggage_allowance":$("#baggage_allowance").val(),
			"cocktails":$("#cocktails").val(),
			"direc_tv":$("#direc_tv").val(),
			"flight":$("#am_flight").val(),
			"id":$("#am_id").val(),
			"inflight_magazine":$("#inflight_magazine").val(),
			"liquor":$("#liquor").val(),
			"lounge_facility":$("#lounge_facility").val(),
			"no_of_breakfast":$("#no_of_breakfast").val(),
			"no_of_dinner":$("#no_of_dinner").val(),
			"no_of_lunch":$("#no_of_lunch").val(),
			"plush_seats":$("#plush_seats").val(),
			"private_screening":$("#private_screening").val(),
			"slippers":$("#slippers").val(),
			"wifi":$("#wifi").val(),
			"window_seat":$("#window_seat").val()
        }
	});

	$("#flight_carrier_form").submit(function(e) {
        e.preventDefault();
        flight_carrier = {
			"flight_carrier_desc":$("#flight_carrier_desc").val(),
			"flight_carrier_logo":$("#flight_carrier_logo").val(),
			"flight_carrier_name":$("#flight_carrier_name").val(),
			"flight_carrier_website":$("#flight_carrier_website").val(),
			"id":$("#f_c_id").val()
        }
	});	
    $("#api").submit(function(e) {
        e.preventDefault();
        var global = new Object();
		var f={
			"Cabin_class":$("#cabin_class").val(),
			"amenities":amenities,
			"flight_carrier":flight_carrier,
			"baggage":$("#baggage").val(),
			"cancellation_policy":$("#cancellation_policy").val(),
			"deals":jobs,
			"desc":$("#desc").val(),
			"flight_name":$("#flight_name").val(),
			"flight_type":$("#flight_type").val(),
			"id":$("#flight_id").val(),
			"images":img,
			"morning_shift":$("#morning_shift").val(),
			"rating":$("#rating").val(),
		}
        console.log(JSON.stringify(f));
        $.ajax({
            url: "http://159.65.148.158/api/v1/flight",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(f),
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