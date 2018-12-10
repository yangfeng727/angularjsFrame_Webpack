module.exports = {
    mode: 'production',// production | development   两种模式的内置优化
    devtool: 'eval-source-map',//调试使用
    entry:  __dirname + "/dev/test/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8091
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                },
                include:/test/
                // exclude: /node_modules|dist/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include:/test/
                // exclude: /node_modules|dist/
            },
            {
                test: /(\.css|\.less)$/,
                use:['style-loader', 'css-loader', 'less-loader'],
                include:/test/
            }
        ]
    }
}