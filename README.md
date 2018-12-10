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
