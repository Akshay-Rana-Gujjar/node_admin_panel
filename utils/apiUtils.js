  /**
 * User: Himanshu Jain
 * Time: 8:03 PM
 * To change this template use File | Settings | File Templates.
 */

// Utility to make calls to API server and prepare request for calls etc
//

"use strict";
let request = require("request");
let log = require("../helpers/logger");
// let rp = require("request-promise");

/**
 * makes http call to server and also handles
 * @param options - configuration and data for call
 * @param cb - callback method to be executed when response is received
 */
module.exports.httpRequest = function (options) {

  
  return new Promise(function (resolve, reject) {
  
    request(options, function (err, response, body) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
         var status;
        body.status=response.statusCode;
        resolve(body);
      }
    });
  });
};

module.exports.turnIntoInstances = function (res) {
  // native Array.map ftw
  return res.map(function (rec) {
    return rec;
  });
};
