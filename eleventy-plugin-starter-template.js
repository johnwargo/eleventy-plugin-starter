// TODO: pass two parameters to RandomNumbers

const randomNumbers = (eleventyConfig) => {
  eleventyConfig.addCollection('RandomNumbers', (collection, limit = 10) => {

    let numbers = [];

    for (let i = 0; i < limit; i++) {
      numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
  });
}

const sayHello = (eleventyConfig) => {
  eleventyConfig.addFilter("sayHello", (name, tag="H2") => {
        return `<${tag}>Hello, ${name}</${tag}>`;
  });
};

const commaize = (eleventyConfig) => {
  eleventyConfig.addFilter("commaize", function (num, locale = "en-us") {
    return num.toLocaleString(locale);
  });

};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(commaize);
  eleventyConfig.addPlugin(randomNumbers);
  eleventyConfig.addPlugin(sayHello);
}