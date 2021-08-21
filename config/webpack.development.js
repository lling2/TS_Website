// 分包、代码区分、压缩功能
const {
  resolve,
  join,
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    publicPath: "/", // 静态资源访问路径
    assetModuleFilename: "images/[name][ext]",
    filename: "scripts/[name].bundle.js"
  },
  devServer: {
    historyApiFallback: true, // 其他页面刷新返回404，让他们都到index
    static: {
      directory: join(__dirname, '../dist'),
      watch: true,
    },
    compress: true,
    port: 8082
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'yuri bunker',
      filename: "index.html",
      template: resolve(__dirname, "../src/index-dev.html")
    })
  ]
}