
const util = require('util');

module.exports = function(eleventyConfig) {    
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.jpeg");
  eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy({"./public": "./"});
      

    eleventyConfig.addFilter('console', function(value) {
        const str = util.inspect(value);
        return `<div style="white-space: pre-wrap;">${str}</div>;`
    });

    eleventyConfig.addFilter("postDate", (date) => {
        return new Date(date).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) 
    });
  };