module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
};