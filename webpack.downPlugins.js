// 所有需要使用的插件
const Webpack=require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');//用于在构建前清除dist目录中的内容
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith'); //webpack合成sprite图
const Uglify = require('uglifyjs-webpack-plugin');// 压缩js
const ExtractPlugin = require('extract-text-webpack-plugin');// 分离css文件
module.exports = {
    Webpack,
    CleanWebpackPlugin,
    HtmlWebpackPlugin,
    SpritesmithPlugin,
    Uglify,

    ExtractCssPlugin:new ExtractPlugin('css/index.css')
}