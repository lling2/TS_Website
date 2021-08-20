/*
 * @Author: your name
 * @Date: 2021-08-19 23:29:54
 * @LastEditTime: 2021-08-20 09:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/webpack.config.ts
 */
const {
    resolve,
    join
} = require('path');
const merge = require('webpack-merge');
// 页面模板处理
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 获取命令行的参数
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';

const cssLoader = [
    // css-loader提取 打包 以后放在静态资源服务器
    {

    },
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1 // 解析@import('')
        }
    },
    {
        loader: "postcss-loader"
    }
]

// 公共配置
const webpackBaseConfig = {
    // 入口
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: join(__dirname, './dist'),
        filename: "scripts/[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude:/(node_modules|bower_components)/,
            use: {
                loader: 'swc-loader'
            }
        }, {
            test: /\.(css|scss)$/,
            loader: cssLoader
        }]
    }
}
module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: join(__dirname, './dist'),
        filename: "scripts/[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude:/(node_modules|bower_components)/,
            use: {
                loader: 'swc-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}