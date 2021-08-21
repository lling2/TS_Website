// 压缩、打包之前清除之前、拆分
const {
  join,
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  // 出口
  output: {
    assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
    filename: "scripts/[name].[contenthash:5].bundle.js",
    publicPath: "/assets"
  },
  // 压缩
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: "runtime"
    },
    // 提供公共的代码
    // https://segmentfault.com/a/1190000039730567
    // 分割提取代码
    splitChunks: {
      chunks: "async", // initial all  函数
      minChunks: 1, // 最小被引用次数，才会被处理，放到公共里面
      maxAsyncRequests: 5, // 一个按需加载的包最终被拆分为n个包，限制n的最大数量。最大默认请求数
      maxInitialRequests: 3, // 
      name: false,
      // 缓存
      cacheGroups: {
        // 公共代码提取
        commons: {
          chunks: "initial", // 
          minChunks: 2,
          name: "commons"
        }
      },
      // 最小大小是xx就可以处理
      minSize: {
        javascript: 100000,
        style: 100000,
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "京程一灯VIP官网",
      filename: "index.html",
      template: resolve(__dirname, "../src/index-prod.html"),
      // 生产环境打包之后需要压缩
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        // 移除属性的引号
        removeAttributeQuotes: true,
      }
    }),
    new CssMinimizerPlugin({
      test: /\.css$/g,
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
      parallel: true, // 开启并行压缩
    })
  ]
}