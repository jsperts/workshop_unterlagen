const path = require('path');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = require('../env_browser/webpack.config')(sourcePath, distPath);
