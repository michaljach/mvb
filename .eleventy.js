module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("content/style.css");
  eleventyConfig.addPassthroughCopy("content/assets/");

  return {
    // Change this if your blog lives in subdirectory
    pathPrefix: "/",
    dir: {
      input: "content",
    },
  };
};
