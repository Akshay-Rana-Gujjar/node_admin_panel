
"use strict";
let url = require("url");

module.exports.fullUrl = function (req) {
  return url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: req.originalUrl
  });
};

module.exports.routePath = function (req) {
  return url.parse(req.url).pathname;
};
