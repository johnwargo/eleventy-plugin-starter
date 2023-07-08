const starterTemplate = require('./src/eleventy-plugin-starter-template.js');

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(starterTemplate);

  return {
    dir: { output: "_site" }
  }

};