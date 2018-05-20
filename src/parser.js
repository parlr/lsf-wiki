const config = {
  contentSelector: "#mw-content-text",
  linksSelector: "a:not(.new)",
  links: () => {
    return document.querySelectorAll(
      `${config.contentSelector} ${config.linksSelector}`
    );
  }
};

module.exports = config;
