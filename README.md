# angularjsFrame_Webpack
使用webpack打包之前的angularjs框架，主要学习webpack,这里webpack的版本为 "webpack": "^4.27.1"

# npm --save-dev --save 的区别
[参考教程](https://blog.csdn.net/juzipchy/article/details/65653683)  
devDependencies是开发时的依赖。比如 我们安装 js的压缩包gulp-uglify插件  
dependencies 下的模块，则是我们发布后还需要依赖的模块，譬如像jQuery库或者Angular框架类似的，我们在开发完后后肯定还要依赖它们，否则就运行不了。
# 安装问题-test目录
## 1.打包css，es6语法报错，最后发现是webpack4 Cannot find module '@babel/core'  
原因"babel-loader": "^8.0.0" 版本问题。  
解决办法一：  
使用"babel-loader": "^7.1.5"即可解决该错误。  
解决办法二：  
```
安装@babel/core依赖
npm install --save-dev @babel/core
```
## 2.运行webpack-dev-server时报错Cannot find module 'webpack-cli/bin/config-yargs'
原因"webpack4.0" 版本问题。 cli被移到了一个叫webpack-cli的包里面,请安装webpack-cli 的除了webpack本身使用cli
解决办法：
```
全局安装一下webpack-cli
npm install webpack-cli -g

在项目目录下要本地安装webpack-cli -D ( 即npm install module_name --save-dev 写入devDependencies)
npm install webpack-cli -D
```
## 3.打包图片，在 webpack 中引入图片需要依赖 url-loader 这个加载器。

[参考教程](https://www.cnblogs.com/ghost-xyx/p/5812902.html)
```
安装：

npm install url-loader --save-dev
// url-loader ，用limit来区分，小于limt的会将图片打包为base64 
// file-loader 可以也加载图片，不会打包为base64
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[hash:8].[name].[ext]',
            publicPath:'../' // 图片引用的相对路径会被publicPath替换，这样就不会出现图片路径错误的问题
        },
        exclude: /node_modules/
    }
```
## 4.由于 webpack 对 html 的处理不太好，打包 HTML 文件中的图片资源是相对来说最麻烦的。这里需要引用一个插件—— html-withimg-loder
```
 安装：npm install html-withimg-loader --save-dev
  ...
  module: {
        rules:[ {
                test: /\.html$/,
                // html中的img标签
                use: ["html-withimg-loader"]
            }]
    }
 
```
## 5.打包图片，合成sprite图（雪碧图）
[参考教程](https://blog.csdn.net/luchuanqi67/article/details/82502009)

## 6.webpack之清除dist目录
一、插件安装
```
npm install clean-webpack-plugin --save-dev
```
二、配置修改
```
//用于在构建前清除dist目录中的内容
const CleanWebpackPlugin = require('clean-webpack-plugin');

//清除dist构建目录文件
plugins.push(new CleanWebpackPlugin(['dist']));
```

## 7.webpack打包提取css到独立文件
一、插件安装
```
npm i extract-text-webpack-plugin -D
// 到这里会报错，css始终独立不出来，webpack运行会报错
最近使用webpack打包时，报了一个extract-text-webpack-plugin的错误，查找了一下，
原来是extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本。在package.json里面看下，果然我使用的webpack版本是v4.16.3，extract-text-webpack-plugin默认安装到的版本是v3.0.2
---------------------
原文：https://blog.csdn.net/qq_32849999/article/details/83340586

解决方法：

npm install --save-dev extract-text-webpack-plugin@next

会下载到 extract-text-webpack-plugin@4.0.0-beta

然后再打包就OK了~
```
二、配置修改
```
let extractPlugin = require('extract-text-webpack-plugin');

//....
plugins:[
    new extractplugin('css/index.css')
],
module:{
    rules:[
        {
            text: /\.scss$/,
            use: extractPlugin.extract({
                use: ['css-loader','sass-loader'],
                fallback: 'style-loader'
            })
        }
    ]
}
// 在plugins只是new了一个插件实例，loader部分的fallback就是将style-loader的输出接口接到index.css上。
//这样我们就可以将css的代码都取出来放在css/index.css里面了，同时插件能自动添加index.css的引入到html的头部
```
