const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      output: "docs",
    },
  };
};
