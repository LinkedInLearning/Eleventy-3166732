const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./css/");

  eleventyConfig.addFilter("upperCase", (value) => {
    return value.toUpperCase();
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });

  function getTeaser(post) {
    if (!post.templateContent) return "";
    if (post.templateContent.indexOf("</p>") > 0) {
      let end = post.templateContent.indexOf("</p>");
      return post.templateContent.substr(0, end + 4);
    }
    return post.templateContent;
  }
  eleventyConfig.addShortcode("teaser", (post) => getTeaser(post));

  eleventyConfig.addShortcode("jahr", () => `${new Date().getFullYear()}`);
};
