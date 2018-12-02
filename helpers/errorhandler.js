
"use strict";

function logErrors (err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.render("500", { message: "Something failed!", error: "Something failed!" });
  } else {
    next(err);
  }
}

function errorHandler (err, req, res, next) {
  res.status(500);
  res.render("500", { message: "Something failed!", error: err });
  // res.render("error", { error: err });
}

module.exports = logErrors;
module.exports = clientErrorHandler;
module.exports = errorHandler;