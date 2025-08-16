module.exports = function(eleventyConfig) {
  // This tells Eleventy to look for files in the root directory
  // and process them.
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
