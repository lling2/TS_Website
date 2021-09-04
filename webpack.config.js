/*
 * @Author: your name
 * @Date: 2021-08-19 23:29:54
 * @LastEditTime: 2021-09-02 13:53:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/webpack.config.ts
 */
const {
    resolve,
    join
} = require('path');
const merge = require('webpack-merge');
// 获取命令行的参数
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _flagmode = _mode === 'production';
// 其他环境的模版
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
// 打包css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let cssLoaders = [
    // css-loader提取 打包 以后放在静态资源服务器(解析css 从下到上，通过link的方式注入)
    MiniCssExtractPlugin.loader,
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1 // 解析@import('')，指定第xx执行
        }
    },
    {
        loader: "postcss-loader"
    }
]

// 公共配置
const webpackBaseConfig = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: join(__dirname, './dist/assets'),
        filename: "scripts/[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)/,
            exclude: /(node_modules|bower_components)/,
            loader: 'swc-loader'
        }, {
            test: /\.(css|scss)$/,
            use: cssLoaders
        }, {
            // webp新图片格式，加载比png快
            test: /\.(png|jpg|gif|eot|woff|woff2|ttf|svg|otf|webp)/,
            type: 'asset'
        }]
    },
    resolve: {
        alias: {
            "@assets": resolve("src/assets"),
            "@components": resolve("src/components"),
            "@models": resolve("src/models"),
            "@routes": resolve("src/routes"),
            "@pages": resolve("src/pages"),
            "@utils": resolve("src/utils"),
            "@recoil": resolve("src/recoil"),
            "@hooks": resolve("src/hooks"),
            "@api": resolve("src/api"),
            "@layouts": resolve("src/layouts"),
        },
        extensions: [".js", ".ts", ".tsx", '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: _flagmode ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _flagmode ? "styles/[id].[contenthash:5].css" : "styles/[id].css",
            ignoreOrder: true
        })
    ]
}
module.exports = merge.default(webpackBaseConfig, _mergeConfig)