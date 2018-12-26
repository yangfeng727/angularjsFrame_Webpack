const rules=require("./webpack.rules");
const plugins=require("./webpack.plugins");

module.exports = {
    mode: 'production',// production | development   两种模式的内置优化
    devtool: 'eval-source-map',//调试使用
    entry: {
      index: __dirname + "/dev/test/js/index.js",//已多次提及的唯一入口文件
      login:__dirname + "/dev/test/js/login/login.js"
    },
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "js/[name].js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8091
    },
    module: {
        rules:rules
    },
    plugins:plugins,

//之前配置
// new webpack.optimize.SplitChunksPlugin({
//     name: 'common', // 如果还要提取公共代码,在新建一个实例
//     minChunks: 2, //重复两次之后就提取出来
//     chunks: ['index', 'a'] // 指定提取范围
// }),

    //webpack4.0现在配置:提取公共模块
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {  // 抽离自己写的公共代码
                    chunks: "initial",
                    name: "common", // 打包后的文件名，任意命名
                    minChunks: 1,//最小引用2次
                    minSize: 0 // 只要超出0字节就生成一个新包
                },
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
            }
        }
    }
}