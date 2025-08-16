module.exports = function(eleventyConfig) {
  
  // This line tells Eleventy to copy the 'admin' folder and its contents 
  // to the final build. This is crucial for your CMS to work.
  eleventyConfig.addPassthroughCopy("admin");

  // This tells Eleventy that .html files should be treated as Nunjucks templates.
  // This is the key change that will make all your pages build correctly.
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
};
