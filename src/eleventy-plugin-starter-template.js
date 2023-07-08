
const starterTemplate = (eleventyConfig) => {
  eleventyConfig.addCollection('starterTemplate', (collection) => {
    
    // do something in your template function

    return [];
  });
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(starterTemplate);
};