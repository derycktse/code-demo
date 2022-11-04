
const withSourceMaps = require('@zeit/next-source-maps');

const config = {
  distDir: 'build',
  assetPrefix: "http://localhost:8080/"
}

module.exports = withSourceMaps(config)