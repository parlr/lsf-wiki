import got from "got";
import queryString from "query-string";

let content = "#mw-content-text";
let blueLinks = "a:not(.new)";
let links = document.querySelectorAll(`${content} ${blueLinks}`);

console.log(links);

console.log("cest qui le papa?");

let categoryName = "Videos_Langue_des_signes_fran%C3%A7aise";
const videos = queryString.stringify({
  action: "query",
  format: "json",
  list: "categorymembers",
  cmtitle: `Category:${categoryName}`,
  cmtype: "file"
});

const details = queryString.stringify({
  action: "query",
  format: "json",
  prop: "imageinfo",
  pageids: "67751406",
  iiprop: "url%7Csize%7Cextmetadata",
  iiurlwidth: 128
});

console.log("before async");

// (async () => {
//   try {
//     const response = await got(`/w/api.php?${videos}`);
//     console.log(response.body);
//   } catch (error) {
//     console.log(error.response.body);
//   }
// })();

(async () => {
  debugger;
  console.log("inside async");

  try {
    const response = await got("sindresorhus.com");
    console.log(response.body);
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
})();

console.log("cest qui la maman?");
