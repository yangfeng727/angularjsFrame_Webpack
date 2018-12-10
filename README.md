# angularjsFrame_Webpack
使用webpack打包之前的angularjs框架，主要学习webpack


# 安装问题-test目录
## 1.打包css报错，最后发现是webpack4 Cannot find module '@babel/core'  
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
