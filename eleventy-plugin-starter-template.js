// TODO: pass two parameters to RandomNumbers

const randomNumbers = (eleventyConfig) => {
  eleventyConfig.addCollection('RandomNumbers', () => {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
  });
}

const sayHello = (eleventyConfig) => {
  eleventyConfig.addFilter("sayHello", (name, tag = "H2") => {
    return `<${tag}>Hello, ${name}</${tag}>`;
  });
};

const commaize = (eleventyConfig) => {
  eleventyConfig.addFilter("commaize", function (num, locale = "en-us") {
    return num.toLocaleString(locale);
  });
};

const hello = (eleventyConfig) => {
  eleventyConfig.addShortcode("hello", function (firstName, lastName) {
    return `<p>Hello, ${firstName} ${lastName}</p>`;
  });
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(commaize);
  eleventyConfig.addPlugin(hello);
  eleventyConfig.addPlugin(randomNumbers);
  eleventyConfig.addPlugin(sayHello);
}