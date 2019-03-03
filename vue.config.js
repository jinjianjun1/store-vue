const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    }
