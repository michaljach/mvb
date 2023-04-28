module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("content/style.css");
  eleventyConfig.addPassthroughCopy("content/assets/");

  return {
    dir: {
      input: "content",
    },
  };
};
