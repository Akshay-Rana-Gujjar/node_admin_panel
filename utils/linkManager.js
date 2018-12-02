
"use strict";

let uriTemplate = require("../constants/uritemplate");

let API_URL = process.env.KOSH_API;

exports.getApiUrl = function (URI, params, queryParam) {
  return API_URL + getURL(URI, params) + makeQueryParam(queryParam);

};

exports.getWebUrl = function (URI, params) {
  return getURL(URI, params);
};

exports.getApiUrlQuery = function (URI, queryParam) {
  return API_URL+ URI + makeQueryParam(queryParam);
};

exports.getForeignApiUrl = function (URI, params, queryParam) {
  return getURL(URI, params) + makeQueryParam(queryParam);
};

let makeQueryParam = function (queryParamMap) {
  let string = "?";
  let paramList;
  let index;
  if (queryParamMap) {
    for (let key in queryParamMap) {
      if (queryParamMap[key].constructor === Array) {
        paramList = queryParamMap[key];
        index = paramList.length;
        while (index) {
          index -= 1;
          string += `${key}[]=${paramList[index]}&`;
        }
      } else {

        string += `${key}=${queryParamMap[key]}&`;
      }
    }
  }
  return string;
};
let getURL = function (url, params) {
  if (params != null && typeof params === "object") {
    return uriTemplate.parse(url).expand(params);
  } else {
    return url;
  }
};
