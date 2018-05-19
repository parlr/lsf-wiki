import got from "got";
import queryString from "query-string";

const config = {
  apiRoot: "https://commons.wikimedia.org/w/api.php",
  contentSelector: "#mw-content-text",
  linksSelector: "a:not(.new)",
  links: document.querySelectorAll(
    `${config.contentSelector} ${config.linksSelector}`
  ),
  categoryName: "Videos_Langue_des_signes_fran%C3%A7aise",
  videos: () =>
    queryString.stringify({
      action: "query",
      format: "json",
      list: "categorymembers",
      cmtitle: `Category:${config.categoryName}`,
      cmtype: "file"
    }),
  details: () =>
    queryString.stringify({
      action: "query",
      format: "json",
      prop: "imageinfo",
      pageids: "67751406",
      iiprop: "url%7Csize%7Cextmetadata",
      iiurlwidth: 128
    })
};

got
  .get(`${config.apiRoot}?${config.videos}`, { json: true })
  .then(response => response.body);

module.exports = config;
