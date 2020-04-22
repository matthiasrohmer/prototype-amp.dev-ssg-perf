module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: 'content',
      output: 'dist',
      includes: '../views',
      layouts: '../views'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  }
};
