module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("content/style.css");
  eleventyConfig.addPassthroughCopy("content/assets/");

  return {
    pathprefix: "/mvb/",
    dir: {
      input: "content",
    },
  };
};
