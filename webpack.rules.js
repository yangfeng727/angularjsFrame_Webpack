let {ExtractCssPlugin}=require("./webpack.downPlugins");
module.exports =[
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
        // include:/test/
        exclude: /node_modules/
    },
    // {
    //     test: /(\.css|\.less)$/,
    //     use:['style-loader', 'css-loader', 'less-loader'],
    //     include:/test/
    // },
    // {
    //     test: /(\.css)$/i,
    //     use: ExtractCssPlugin.extract({
    //         use: ['css-loader'],
    //         fallback: 'style-loader'
    //     }),
    //     exclude: /node_modules/
    // },
    {
        test: /\.less$/i,
        use: ExtractCssPlugin.extract({
            use: ['css-loader','less-loader'],
            fallback: 'style-loader'
        }),
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: 'images/[hash:8].[name].[ext]',
            publicPath:'../' // 图片引用的相对路径会被publicPath替换，这样就不会出现图片路径错误的问题
        },
        exclude: /node_modules/
    },
    {
        test: /\.html$/,
        // html中的img标签
        use: ["html-withimg-loader"]
    }
    // {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'//url-loader 后面除了 limit 字段，还可以通过 name 字段来指定图片打包的目录与文件名：
    // }
]