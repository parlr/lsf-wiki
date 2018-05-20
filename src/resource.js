import queryString from "query-string";
// const queryString = require("query-string");

const resource = {
  rootUrl: "http://commons.wikimedia.org/w/api.php",
  categoryName: "Videos_Langue_des_signes_française",
  videos: () =>
    queryString.stringify({
      action: "query",
      format: "json",
      origin: "*",
      list: "categorymembers",
      cmtitle: `Category:${resource.categoryName}`,
      cmtype: "file"
    }),
  details: () =>
    queryString.stringify({
      action: "query",
      format: "json",
      origin: "*",
      prop: "imageinfo",
      pageids: "67751406",
      iiprop: "url%7Csize%7Cextmetadata",
      iiurlwidth: 128
    })
};

module.exports = resource;
