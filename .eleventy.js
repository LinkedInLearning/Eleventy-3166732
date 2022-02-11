const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./input/css");
  eleventyConfig.addPassthroughCopy("./input/img");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "input",
      output: "public",
    },
  };
};
