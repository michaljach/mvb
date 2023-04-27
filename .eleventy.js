module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      output: "docs",
    },
  };
};
