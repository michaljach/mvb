module.exports = {
  layout: (template) => {
    if (template.page.inputPath.includes("posts")) {
      return "post.njk";
    } else if (template.page.inputPath.includes("pages")) {
      return "page.njk";
    } else {
      return "homepage.njk";
    }
  },
};
