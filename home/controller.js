
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
          
          // for (var i = 0, len = a.flights.length; i < len; ++i) {
          //   var customer=a.flights[i].baggage;
          //   arr.push(customer);
          // }

          a.flights.forEach(function(element) {
            console.log(element.flight_carrier);
            carrier.push(element.flight_carrier);
            arr.push(element.amenities);
            console.log(carrier);

          });
          console.log(arr);
          res.render("../views/Flights List View.ejs", {data:carrier,data1:arr});
         
        });
       


     
    };
    module.exports.return= function (req, res, next) {
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
        
        // for (var i = 0, len = a.flights.length; i < len; ++i) {
        //   var customer=a.flights[i].baggage;
        //   arr.push(customer);
        // }

        // a.flights.forEach(function(element) {
        //   console.log(element.flight_carrier);
        //   carrier.push(element.flight_carrier);
        //   arr.push(element.amenities);
        //   console.log(carrier);

        // });
        console.log(arr);
        res.render("../views/List View Return.ejs");
       
      });
     


   
  };
    module.exports.multicity= function (req, res, next) {
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
        
        // a.flights.forEach(function(element) {
        //   carrier.push(element.flight_carrier);
        // });
        console.log(carrier);
        res.render("../views/List View Multicity.ejs");

      });

  };
  /*module.exports.return= function (req, res, next) {
    var arr = [];
    var carrier=[];
    console.log("Fetching All Flights");
    let options = {
      url:'http://159.65.148.158/api/v1/flight',
      method : "GET",
      json : true,
    };
    apiUtils.httpRequest(options).then(function(data) {
      var a=data.result;
      
      for (var i = 0, len = a.flights.length; i < len; ++i) {
        var customer=a.flights[i].baggage;
        arr.push(customer);
        //console.log(arr);
      }
      a.flights.forEach(function(element) {
        console.log(element.flight_carrier);
        carrier.push(element.flight_carrier);
        console.log(carrier);
      });
      res.render("../views/List View Return.ejs", {data:carrier});

    });

};*/
module.exports.return= function (req, res, next) {
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
    
    for (var i = 0, len = a.flights.length; i < len; ++i) {
      var customer=a.flights[i].baggage;
      arr.push(customer);
      //console.log(arr);
    }
    a.flights.forEach(function(element) {
      console.log(element.flight_carrier);
      carrier.push(element.flight_carrier);
      console.log(carrier);
    });
    res.render("../views/List View Return.ejs", {data:carrier});

  });

};
/*module.exports.byclass= function (req, res, next) {
  var arr = [];
  var carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight?flight_type='+req.params.tagId,
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    
    // for (var i = 0, len = a.flights.length; i < len; ++i) {
    //   var customer=a.flights[i].baggage;
    //   arr.push(customer);
    // }

    a.flights.forEach(function(element) {
      console.log(element.flight_carrier);
      carrier.push(element.flight_carrier);
      arr.push(element.amenities);
      console.log(carrier);

    });
    console.log(arr);
    res.render("../views/Flights List View.ejs", {data:carrier,data1:arr});
    /*
    a.flights.forEach(function(element) {
      console.log(element.amenities.wifi);
    });*/
  //});
 


//res.render("../views/Flights List View.ejs", {data:arr});
//res.render("../views/Flights List View.ejs", {data:[{name:'shaun'},{name:'jerry'}]});
/*res.render("../views/Flights List View.ejs", {data:[ { first: '4kg per person' },
{ second: '4kg per person' },
{ third: '4kg per person' } ]
});*/
//};

module.exports.byprice= function (req, res, next) {
  var arr = [];
  var carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight?total_fare='+req.params.tagId,
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    
    for (var i = 0, len = a.flights.length; i < len; ++i) {
      var customer=a.flights[i].baggage;
      arr.push(customer);
    }
    a.flights.forEach(function(element) {
      console.log(element.flight_carrier);
      carrier.push(element.flight_carrier);
      console.log(carrier);
    });
    res.render("../views/Flights List View.ejs", {data:carrier});
    /*
    a.flights.forEach(function(element) {
      console.log(element.amenities.wifi);
    });*/
  });
 


//res.render("../views/Flights List View.ejs", {data:arr});
//res.render("../views/Flights List View.ejs", {data:[{name:'shaun'},{name:'jerry'}]});
/*res.render("../views/Flights List View.ejs", {data:[ { first: '4kg per person' },
{ second: '4kg per person' },
{ third: '4kg per person' } ]
});*/
};

module.exports.byclass= function (req, res, next) {
  var arr = [];
  var carrier=[];
  console.log("Fetching All Flights");
  let options = {
    url:'http://139.59.42.51:5000/api/v1/flight?flight_type='+req.params.tagId,
    method : "GET",
    json : true,
  };
  apiUtils.httpRequest(options).then(function(data) {
    var a=data.result;
    
  

    a.flights.forEach(function(element) {
      console.log(element.flight_carrier);
      carrier.push(element.flight_carrier);
      arr.push(element.amenities);
      console.log(carrier);

    });
    console.log(arr);
    res.render("../views/Flights List View.ejs", {data:carrier,data1:arr});
   
  });
 



};
