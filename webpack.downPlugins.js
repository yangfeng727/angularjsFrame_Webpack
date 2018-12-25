// 所有插件
const CleanWebpackPlugin = require('clean-webpack-plugin');//用于在构建前清除dist目录中的内容
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith'); //webpack合成sprite图
const ExtractPlugin = require('extract-text-webpack-plugin');// 分离css文件
let ExtractCssPlugin = new ExtractPlugin('css/index.css');
    // ExtractLessPlugin = new ExtractPlugin('css/indexLess.css');
module.exports = {
    CleanWebpackPlugin,
    HtmlWebpackPlugin,
    SpritesmithPlugin,

    ExtractCssPlugin,
    // ExtractLessPlugin
}