import queryString from "query-string";

const resource = {
  rootUrl: "http://commons.wikimedia.org/w/api.php",
  categoryName: "Videos_Langue_des_signes_française",
  videos: term =>
    queryString.stringify({
      action: "query",
      generator: "categorymembers", // use the generated list to apply `prop`
      gcmtitle: `Category:${resource.categoryName}`,
      gcmtype: "file",
      gcmlimit: 1, // max results
      gcmsort: "sortkey",
      gcmstartsortkeyprefix: term,
      prop: "imageinfo",
      iiprop: "url", // image info

      redirects: 1,
      formatversion: 2,
      format: "json",
      origin: "*" // for CORS
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
