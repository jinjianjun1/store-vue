const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    productionSourceMap: false,
    runtimeCompiler : true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/store-vue/'
        : '/',
    outputDir: 'dist',

    }
