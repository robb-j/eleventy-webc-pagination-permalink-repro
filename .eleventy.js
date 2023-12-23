const { createHmac } = require('node:crypto')
const eleventyWebc = require('@11ty/eleventy-plugin-webc')

function hash(value) {
  return createHmac('sha256', 'top_secret').update(value).digest('base64url')
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyWebc)
  eleventyConfig.addFilter('hash', v => hash(v))
}
