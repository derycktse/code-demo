
const withSourceMaps = require('@zeit/next-source-maps');

const config = {
<<<<<<< HEAD
  distDir: 'build',
  // assetPrefix: "http://localhost:8080/"
=======
  // distDir: 'build',
  // assetPrefix: "http://localhost:8080/build/_next/"
>>>>>>> 081e6754bff4075addb9c06e6ba0191f8d57e0b2
}

module.exports = withSourceMaps(config)