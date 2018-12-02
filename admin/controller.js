
"use strict";
var request = require('request');
let urlUtils = require("../utils/urlUtils");
let apiUrl = require("../constants/uritemplate");
let apiUtils = require("../utils/apiUtils");
let log = require("../helpers/logger");
let linkManager = require("../utils/linkManager")


module.exports.index= function (req, res, next) {
  var arr = [];
  var carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight',
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    console.log(a);
    
    a.flights.forEach(function(element) {
      carrier.push(element.id);
    });
    console.log(carrier);
    res.render("../views/Admin/login9.ejs", {data:carrier});
  });
};

module.exports.getAll= function (req, res, next) {
  var amenities = [];
  var carrier=[];
  var stops=[];
  var flight_carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight?flight_id='+req.params.tagId,
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    //console.log(a);
    
    a.flights.forEach(function(element) {
      
      carrier.push(element.Cabin_class);
      carrier.push(element.baggage);
      carrier.push(element.desc);
      carrier.push(element.flight_name);
      carrier.push(element.flight_type);
      carrier.push(element.id);
      carrier.push(element.morning_shift);
      carrier.push(element.rating);
      
    });
    a.flights.forEach(function(element) {
      
      amenities.push(element.amenities.Exclusive_check_in_facility);
      amenities.push(element.amenities.Spacious_cabins);
      amenities.push(element.amenities.baggage_allowance);
      amenities.push(element.amenities.cocktails);
      amenities.push(element.amenities.direc_tv);
      amenities.push(element.amenities.flight);
      amenities.push(element.amenities.id);
      amenities.push(element.amenities.inflight_magazine);
      amenities.push(element.amenities.liquor);
      amenities.push(element.amenities.lounge_facility);
      amenities.push(element.amenities.no_of_breakfast);
      amenities.push(element.amenities.no_of_dinner);
      amenities.push(element.amenities.no_of_lunch);
      amenities.push(element.amenities.plush_seats);
      amenities.push(element.amenities.private_screening);
      amenities.push(element.amenities.slippers);
      
      amenities.push(element.amenities.wifi);
      amenities.push(element.amenities.window_seat);
      
    });
    var i=0;
    a.flights.forEach(function(element) {
      
      flight_carrier.push(element.flight_carrier.flight_carrier_desc);
      flight_carrier.push(element.flight_carrier.flight_carrier_logo);
      flight_carrier.push(element.flight_carrier.flight_carrier_name);
      flight_carrier.push(element.flight_carrier.flight_carrier_website);
      flight_carrier.push(element.flight_carrier.id);
     // flight_carrier.push(element.deals[i].adults);
      
     
      i++;
    });
    console.log(flight_carrier);
    res.render("../views/Admin/new.ejs", {data:flight_carrier});
    //res.send("tagId is set to " +flight_carrier);
  });
};



module.exports.fligthdata= function (req, res, next) {
  var arr = [];
  var carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight',
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    console.log(a);
    
    a.flights.forEach(function(element) {
      carrier.push(element.id);
    });
    console.log(carrier);
    res.render("../views/Admin/login9.ejs", {data:carrier});
  });
};


        
