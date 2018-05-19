import got from "got";
import queryString from "query-string";

let content = "#mw-content-text";
let blueLinks = "a:not(.new)";
let links = document.querySelectorAll(`${content} ${blueLinks}`);

console.log(links);
