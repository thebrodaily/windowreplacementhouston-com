module.exports = function(eleventyConfig) {
  
  // This line tells Eleventy to copy the 'admin' folder and its contents 
  // to the final build. This is crucial for your CMS to work.
  eleventyConfig.addPassthroughCopy("admin");

  // You can add other folders here if you create them later, like 'assets' for images.
  // eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
