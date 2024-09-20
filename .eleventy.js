const markdownIt = require("markdown-it")();

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Custom filters
  eleventyConfig.addAsyncFilter("contactHTMLize", async function(value) {
    return markdownIt.renderInline(value);
  });

  return {
		pathPrefix: "/2023/",
	};
};
