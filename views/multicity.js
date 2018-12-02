$(document).ready(function () {
    var a;
    var arr = [];
    var carrier = [];

    $.ajax({
        url: 'http://139.59.42.51:5000/api/v1/flight',
        type: 'GET',
        success: function (data) {
            $("#listing").empty();
            var result = data.result;
            result.flights.forEach(function (element) {
                var flightcarriername = element.flight_carrier.flight_carrier_name;
                var i = 0;
                element.deals.forEach(function (e) {
                    var websitename = e.website.website_name;
                    var departfromcity = e.depart_from_city;
                    var landingcity = e.land_to_city;
                    var stops = e.no_of_stops;
                    var totalfare=e.total_fare;
                    
                    if (stops == 0) { var stop = "Direct Flight"; } else { var stop = stops + " " + "stops" }
                     
                    $("#listing").append(
                    
                        "<div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div>"

                    );
                     
                    
                });
            });
            // for(var carriers of carrier){
            //     var b=carriers.flight_carrier_name;
            // $("#listing").html("<div class='flight-list listing-style3 flight'><article class='box'><figure class='col-xs-3 col-sm-2'><span><img width='94' height='90' alt='' src='./Flights List View_files/2.png'></span></figure><div class='details col-xs-9 col-sm-10'><div class='details-wrapper'><div class='first-row'><div><h4 class='box-title'>" + b + "<small>Flight : 380 A</small></h4><a href='#' data-toggle='popover' title='Cancelation Policy' data-content='Cancelation Policy Details' class='button btn-mini stop yellow'>Fare & Cancelation Details</a><div class='amenities'><i data-toggle='modal' data-target='#myModal1' class='soap-icon-wifi circle'></i><i data-toggle='modal' data-target='#myModal2' class='soap-icon-entertainment circle'></i><i data-toggle='modal' data-target='#myModal3' class='soap-icon-fork circle'></i><i data-toggle='modal' data-target='#myModal4' class='soap-icon-suitcase circle'></i></div></div><div><span class='price'><small>Ibibo.com</small>$620</span></div></div><div class='second-row'><div class='time'><div class='take-off col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>DEL (Delhi)</span><br> 7:50 Am </div></div><div class='total-time col-sm-4'><div class='icon'><i class='soap-icon-clock yellow-color'></i></div><div><span class='skin-color'><a href=''>Direct</a></span><br> 1 hr 30 min </div></div><div class='landing col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>LKO (Lucknow)</span><br> 9:20 Am </div></div></div><div class='action'><a href='http://www.soaptheme.net/html/travelo/flight-detailed.html' class='button btn-small full-width green'>More Deals</a></div></div></div></div></article></div>");
            // }
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },

    });
    var myHeaders = new Headers();
    myHeaders.append("X-My-Custom-Header", "some value");
    fetch('http://139.59.42.51:5000/api/v1/flight', {
        headers: myHeaders
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    });
});

function bytype(e) {
    $(document).ready(function () {
        var a;
        var arr = [];
        var carrier = [];
        alert(e);

        if (e == "Business") {
            a = "1";
        } else {
            $("#listing").empty();
        }

        $.ajax({
            url: 'http://139.59.42.51:5000/api/v1/flight?flight_type=' + a,
            type: 'GET',
            success: function (data) {

                var result = data.result;
                $('#listing').empty(); 
                result.flights.forEach(function (element) {
                    var flightcarriername = element.flight_carrier.flight_carrier_name;
                    var i = 0;
                    element.deals.forEach(function (e) {
                        var c = e.website.website_name;
                        var departfromcity = e.depart_from_city;
                        var landingcity = e.land_to_city;
                        var stops = e.no_of_stops;
                        var totalfare=e.total_fare;
                        if (stops == 0) { var stop = "Direct Flight"; } else { var stop = stops + " " + "stops" }
                       
                            
                        $("#listing").append(
                    
                            "<div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div>"
    
                        );
                        
                    });
                });
                // for(var carriers of carrier){
                //     var b=carriers.flight_carrier_name;
                // $("#listing").html("<div class='flight-list listing-style3 flight'><article class='box'><figure class='col-xs-3 col-sm-2'><span><img width='94' height='90' alt='' src='./Flights List View_files/2.png'></span></figure><div class='details col-xs-9 col-sm-10'><div class='details-wrapper'><div class='first-row'><div><h4 class='box-title'>" + b + "<small>Flight : 380 A</small></h4><a href='#' data-toggle='popover' title='Cancelation Policy' data-content='Cancelation Policy Details' class='button btn-mini stop yellow'>Fare & Cancelation Details</a><div class='amenities'><i data-toggle='modal' data-target='#myModal1' class='soap-icon-wifi circle'></i><i data-toggle='modal' data-target='#myModal2' class='soap-icon-entertainment circle'></i><i data-toggle='modal' data-target='#myModal3' class='soap-icon-fork circle'></i><i data-toggle='modal' data-target='#myModal4' class='soap-icon-suitcase circle'></i></div></div><div><span class='price'><small>Ibibo.com</small>$620</span></div></div><div class='second-row'><div class='time'><div class='take-off col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>DEL (Delhi)</span><br> 7:50 Am </div></div><div class='total-time col-sm-4'><div class='icon'><i class='soap-icon-clock yellow-color'></i></div><div><span class='skin-color'><a href=''>Direct</a></span><br> 1 hr 30 min </div></div><div class='landing col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>LKO (Lucknow)</span><br> 9:20 Am </div></div></div><div class='action'><a href='http://www.soaptheme.net/html/travelo/flight-detailed.html' class='button btn-small full-width green'>More Deals</a></div></div></div></div></article></div>");
                // }
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            },

        });
        var myHeaders = new Headers();
        myHeaders.append("X-My-Custom-Header", "some value");
        fetch('http://139.59.42.51:5000/api/v1/flight?flight_type=' + a, {
            headers: myHeaders
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
        });
    });
}

function bycheapest() {
    $(document).ready(function () {
        var a;
        var arr = [];
        var carrier = [];
       alert("sort by cheapest");

        $.ajax({
            url: 'http://139.59.42.51:5000/api/v1/flight?order=total_fare',
            type: 'GET',
            success: function (data) {

                var result = data.result;
                $('#listing').empty(); 
                result.flights.forEach(function (element) {
                    var flightcarriername = element.flight_carrier.flight_carrier_name;
                    var i = 0;
                    element.deals.forEach(function (e) {
                        var c = e.website.website_name;
                        var departfromcity = e.depart_from_city;
                        var landingcity = e.land_to_city;
                        var stops = e.no_of_stops;
                        var totalfare=e.total_fare;
                        if (stops == 0) { var stop = "Direct Flight"; } else { var stop = stops + " " + "stops" }
                       
                            
                        $("#listing").append(
                    
                            "<div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div><div class='col-sm-6 col-lg-4'><article class='box'><figure><span><img width='87' height='57' alt='' src='./List View Return_files/1.png'></span></figure><div class='details'><span class='price'><small>avg/person</small>Rs."+totalfare+"</span><h4 class='box-title'>"+flightcarriername+"<small>Oneway flight</small></h4><div class='time'><div class='take-off'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>Take off</span><br>Wed Nov 13<br>7:50 Am</div></div><div class='landing'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>landing</span><br>Wed Nov 13<br>7:50 Am</div></div></div><p class='duration'><span class='skin-color'>Total Time</span> 13 Hour, 40 minutes</p><div class='action'><a class='button btn-small full-width' href='http://www.soaptheme.net/html/travelo/flight-detailed.html'>SELECT NOW</a></div></div></article></div>"
    
                        );
                        
                    });
                });
                // for(var carriers of carrier){
                //     var b=carriers.flight_carrier_name;
                // $("#listing").html("<div class='flight-list listing-style3 flight'><article class='box'><figure class='col-xs-3 col-sm-2'><span><img width='94' height='90' alt='' src='./Flights List View_files/2.png'></span></figure><div class='details col-xs-9 col-sm-10'><div class='details-wrapper'><div class='first-row'><div><h4 class='box-title'>" + b + "<small>Flight : 380 A</small></h4><a href='#' data-toggle='popover' title='Cancelation Policy' data-content='Cancelation Policy Details' class='button btn-mini stop yellow'>Fare & Cancelation Details</a><div class='amenities'><i data-toggle='modal' data-target='#myModal1' class='soap-icon-wifi circle'></i><i data-toggle='modal' data-target='#myModal2' class='soap-icon-entertainment circle'></i><i data-toggle='modal' data-target='#myModal3' class='soap-icon-fork circle'></i><i data-toggle='modal' data-target='#myModal4' class='soap-icon-suitcase circle'></i></div></div><div><span class='price'><small>Ibibo.com</small>$620</span></div></div><div class='second-row'><div class='time'><div class='take-off col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>DEL (Delhi)</span><br> 7:50 Am </div></div><div class='total-time col-sm-4'><div class='icon'><i class='soap-icon-clock yellow-color'></i></div><div><span class='skin-color'><a href=''>Direct</a></span><br> 1 hr 30 min </div></div><div class='landing col-sm-4'><div class='icon'><i class='soap-icon-plane-right yellow-color'></i></div><div><span class='skin-color'>LKO (Lucknow)</span><br> 9:20 Am </div></div></div><div class='action'><a href='http://www.soaptheme.net/html/travelo/flight-detailed.html' class='button btn-small full-width green'>More Deals</a></div></div></div></div></article></div>");
                // }
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            },

        });
        var myHeaders = new Headers();
        myHeaders.append("X-My-Custom-Header", "some value");
        fetch('http://139.59.42.51:5000/api/v1/flight?order=total_fare', {
            headers: myHeaders
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
        });
    });
}
